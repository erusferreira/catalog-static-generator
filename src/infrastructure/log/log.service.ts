import * as fs from 'node:fs';
import { v4 as uuidv4 } from 'uuid';

export class LogService {

  private outputFolder = process.env.LOGS_OUTPUT_FOLDER;
  private filePath = `${this.outputFolder}/${process.env.LOGS_FILE_NAME}`;

  public async save(message) {
    const receivedMessage = message.value.toString();

    const logMessage = {
      id: uuidv4(),
      updatedAt: JSON.parse(receivedMessage).date,
      merchantId: JSON.parse(receivedMessage).merchantId,
      catalogId: JSON.parse(receivedMessage).catalogId,
      message: JSON.parse(receivedMessage).message
    }

    try {
      if (!fs.existsSync(this.outputFolder)) {
        fs.mkdirSync(this.outputFolder);
        fs.writeFileSync(this.filePath, JSON.stringify([]));
        this.incrementLogFile(logMessage);
      }
      else {
        fs.access(`${this.filePath}`, fs.constants.F_OK, async (error) => {
          if (error) {
            fs.writeFileSync(this.filePath, JSON.stringify([]));
            return this.incrementLogFile(logMessage);
          }
          this.incrementLogFile(logMessage);
        });
      }
      
    } catch (error) {
      throw new Error(`Not possible to save log: ${error.message}`);
    }
  }

  private incrementLogFile(logMessage) {
    fs.readFile(this.filePath, 'utf8', async (error, data) => {
      if (error) {
        throw new Error(`Not possible to read the log file: ${error.message}`);
      }

      if (!data) {
        data = '[]';
        fs.writeFileSync(this.filePath, JSON.stringify(data));
      }

      try {
        const jsonData = JSON.parse(data);
        jsonData.push(logMessage);

        fs.writeFile(this.filePath, JSON.stringify(jsonData, null, 2), 'utf8', (error) => {
          if (error) {
            throw new Error(`Not possible to increment the log file: ${error.message}`);
          }
          console.log('Log successfuly saved!');
        });
      } catch (error) {
        throw new Error(`Not possible to push data to the log file: ${error.message}`);
      }
      
    });
  }

}
