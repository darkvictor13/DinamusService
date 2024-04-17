import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;

  @IsNumber()
  churchId: number;
}
