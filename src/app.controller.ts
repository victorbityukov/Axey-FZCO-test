import { Parser } from 'json2csv';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateItemDto, UpdateItemDto } from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Items')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ description: 'Create item' })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.appService.create(createItemDto);
  }

  @ApiOperation({ description: 'Get CSV file with all items' })
  @Get()
  async findAll(@Res() res) {
    const fields = ['id', 'title', 'price'];
    const opts = { fields };
    const items = await this.appService.findAll();
    try {
      const parser = new Parser(opts);
      const csv = parser.parse(items);
      res.header('Content-Type', 'text/csv');
      res.attachment('items.csv');
      return res.send(csv);
    } catch (e) {
      throw new Error(e);
    }
  }

  @ApiOperation({ description: 'Get item by ID' })
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: 'Update item by ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.appService.update(+id, updateItemDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: 'Delete item by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }
}
