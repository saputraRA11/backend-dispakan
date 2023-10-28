import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'
import { BaseDto } from 'src/commons/base.dto'

export class FilterAllNews extends BaseDto {
  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  search: string
}
