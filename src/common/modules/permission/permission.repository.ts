import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entity/permission.entity';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dtos/create_permission.dto';
import * as address from 'address';

const ip = address.ip();
@Injectable()
export class PermissionRepository {
  private readonly logger = new Logger(
    `${ip} src/permission/permission.repository.ts`,
  );
  constructor(
    @InjectRepository(Permission)
    private permissionRepository: Repository<Permission>,
  ) {}

  async createPermission(
    createPermissionDto: CreatePermissionDto,
  ): Promise<Permission> {
    try {
      const { description } = createPermissionDto;

      const newPermission = this.permissionRepository.create({
        description,
      });

      return this.permissionRepository.save(newPermission);
    } catch (error) {
      this.logger.error(`Create Permission Error: ${error}`);
      throw new Error(`Create Permission Error: ${error}`);
    }
  }

  findAll(): Promise<Permission[]> {
    try {
      return this.permissionRepository.find();
    } catch (error) {
      this.logger.error(`Get All Permissions Error: ${error}`);
      throw new Error(`Get All Permissions Error: ${error}`);
    }
  }

  findById(id: number): Promise<Permission> {
    try {
      return this.permissionRepository.findOneBy({
        id: id,
      });
    } catch (error) {
      this.logger.error(`Get Permission By Id Error: ${error}`);
      throw new Error(`Get Permission By Id Error: ${error}`);
    }
  }
}
