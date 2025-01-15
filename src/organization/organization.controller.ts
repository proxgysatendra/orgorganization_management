import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Organization } from './entities/organization.entity';

@Controller('organizations')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  create(@Body() data: Partial<Organization>): Promise<Organization> {
    return this.organizationService.create(data);
  }

  @Get()
  findAll(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }
}
