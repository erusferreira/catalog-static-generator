import { Injectable } from "@nestjs/common";
import * as fs from 'node:fs';

interface MessageDTO {
  value: any;
  topic: string;
  partition: string;
}

@Injectable()
export class StaticService {

  public generate(messageDto: MessageDTO): void {
    
  }
  
}
