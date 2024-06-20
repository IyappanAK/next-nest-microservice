import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Book{
    @Prop()
    name:string

    @Prop()
    price:number
}

export const BooksSchema=SchemaFactory.createForClass(Book)