import { Injectable } from '@nestjs/common';
// import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private connection: Connection) {}

  testConnection(): Connection {
    return this.connection;
  }
}
