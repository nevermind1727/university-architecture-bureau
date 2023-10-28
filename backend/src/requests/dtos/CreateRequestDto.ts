import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateRequestDto {
  @IsEmail()
  @MinLength(2)
  email: string;

  @IsString()
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(50)
  phone: string;

  @IsNumber()
  @Min(2)
  square: number;

  @IsNumber()
  floor_count: number;

  @IsString()
  comment: string;
}
