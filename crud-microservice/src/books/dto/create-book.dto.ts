import { IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    name:string

    @IsNumber()
    price:number
}

