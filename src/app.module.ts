import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'organization_management',
      autoLoadEntities: true,
      synchronize: true, // Don't use in production
    }),
    OrganizationModule,
  ],
})
export class AppModule {}
