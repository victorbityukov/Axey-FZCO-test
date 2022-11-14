import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({})
export class Item extends Model<Item> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @Column
  price: number;
}
