import { Schema, Document } from 'mongoose';

export interface Event extends Document {
    title: string;
    description: string;
    date: Date;
    location: string;
}

export const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
});
