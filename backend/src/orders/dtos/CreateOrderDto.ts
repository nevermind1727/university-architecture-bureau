import {
  IsBoolean,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import mongoose from 'mongoose';

export class CreateOrderDto {
  @IsEmail()
  @MinLength(2)
  email: string;

  @IsString()
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(50)
  phone: string;
  @IsBoolean()
  cash_method: boolean;
  @IsBoolean()
  cashless_payment: boolean;
  @IsBoolean()
  courirer_delivery: boolean;
  @IsBoolean()
  in_office: boolean;
  @IsBoolean()
  money_transfer: boolean;
  @IsBoolean()
  online_payment: boolean;

  house: mongoose.Types.ObjectId;

  @IsString()
  comment: string;
}
