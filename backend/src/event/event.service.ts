import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.schema';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
    constructor(@InjectModel('Event') private eventModel: Model<Event>) {}

    async getAllEvents(): Promise<Event[]> {
        return this.eventModel.find().exec();
    }

    async createEvent(createEventDto: CreateEventDto): Promise<Event> {
        const newEvent = new this.eventModel(createEventDto);
        return newEvent.save();
    }
}
