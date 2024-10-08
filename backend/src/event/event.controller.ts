import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    async getAllEvents() {
        return this.eventService.getAllEvents();
    }

    @Post()
    async createEvent(@Body() createEventDto: CreateEventDto) {
        return this.eventService.createEvent(createEventDto);
    }
}
