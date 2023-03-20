// Libraries
import { Connection } from 'typeorm';
import { Test } from '@nestjs/testing';

// Routes
import { AppModule } from '../../../../app.module';
import { DatabaseService } from '../database.service';

describe('Database Connection Check', () => {
  let dbConnection: Connection;
  let app: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef
      .get<DatabaseService>(DatabaseService)
      .testConnection();
  });

  it('db connection Test', () => {
    expect(dbConnection).toBeDefined();
  });

  afterAll(async () => {
    await app.close();
  });
});
