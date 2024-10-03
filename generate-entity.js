const fs = require('fs');
const path = require('path');

const entityName = process.argv[2];

if (!entityName) {
  console.error('Please enter name entity.');
  process.exit(1);
}

const entityPath = path.join(__dirname, 'src/modules', entityName.toLowerCase());

if (!fs.existsSync(entityPath)) {
  fs.mkdirSync(entityPath);
}

const moduleContent = `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ${entityName}Service } from './${entityName.toLowerCase()}.service';
import { ${entityName}Controller } from './${entityName.toLowerCase()}.controller';
import { ${entityName} } from './${entityName.toLowerCase()}.entity';

@Module({
  imports: [TypeOrmModule.forFeature([${entityName}])],
  controllers: [${entityName}Controller],
  providers: [${entityName}Service],
})
export class ${entityName}Module {}
`;

const controllerContent = `import { Controller, Get } from '@nestjs/common';
import { ${entityName}Service } from './${entityName.toLowerCase()}.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('${entityName.toLowerCase()}')
@Controller('${entityName.toLowerCase()}')
export class ${entityName}Controller {
  constructor(private readonly ${entityName.toLowerCase()}Service: ${entityName}Service) {}

  @Get()
  findAll() {
    return this.${entityName.toLowerCase()}Service.findAll();
  }
}
`;

const serviceContent = `import { Injectable } from '@nestjs/common';

@Injectable()
export class ${entityName}Service {
  findAll() {
    return [];
  }
}
`;

const entityContent = `import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ${entityName} {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
`;

fs.writeFileSync(path.join(entityPath, `${entityName.toLowerCase()}.module.ts`), moduleContent);
fs.writeFileSync(
  path.join(entityPath, `${entityName.toLowerCase()}.controller.ts`),
  controllerContent,
);
fs.writeFileSync(path.join(entityPath, `${entityName.toLowerCase()}.service.ts`), serviceContent);
fs.writeFileSync(path.join(entityPath, `${entityName.toLowerCase()}.entity.ts`), entityContent);

console.log(`Create success entity: ${entityName}`);
