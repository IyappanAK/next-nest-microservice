import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop()
    email:string

    @Prop()
    password:number
}

export const UsersSchema=SchemaFactory.createForClass(User)