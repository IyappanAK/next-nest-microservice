import { Document } from "mongoose";

export interface IBooks extends Document{
    readonly name:string
    readonly price:number
}