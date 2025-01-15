import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepo: Repository<Organization>,
  ) {}

  async create(data: Partial<Organization>): Promise<Organization> {
    const org = this.organizationRepo.create(data);
    return this.organizationRepo.save(org);
  }

  async findAll(): Promise<Organization[]> {
    return this.organizationRepo.find();
  }
}
