import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateItemDto, UpdateItemDto } from './dto';
import { Item } from './models';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Item)
    private itemModel: typeof Item,
  ) {}

  async create(item: CreateItemDto) {
    await this.itemModel.create(item);
  }

  async findAll() {
    return this.itemModel.findAll();
  }

  findOne(id: number) {
    return this.getItemById(id);
  }

  async update(id: number, data: UpdateItemDto) {
    await this.getItemById(id);
    await this.itemModel.update(data, {
      where: { id },
    });
  }

  async remove(id: number) {
    await this.getItemById(id);
    await this.itemModel.destroy({ where: { id } });
  }

  async getItemById(id: number) {
    const item = await this.itemModel.findByPk(id);
    if (!item) {
      throw new NotFoundException(`Not found item by id ${id}`);
    }
    return item;
  }
}
