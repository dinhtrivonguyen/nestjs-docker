import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  describtion: { type: String, required: true },
  year: { type: Number, required: true },
});


export interface Movie extends mongoose.Document{
    id: string;
    title: string;
    description: string;
    year: number;
}
