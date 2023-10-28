import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class BaseDto{
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  active_on: string
}