import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER_ITEM_PRICE, SWAGGER_ITEM_TITLE } from '../swagger';

export class UpdateItemDto {
  @ApiProperty(SWAGGER_ITEM_TITLE)
  readonly title?: string;
  @ApiProperty(SWAGGER_ITEM_PRICE)
  readonly price?: number;
}
