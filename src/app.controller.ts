import {
    Controller,
    Post,
    Param,
    ParseUUIDPipe,
    Get,
    Body,
} from '@nestjs/common'
import { AppService } from './app.service'
import { CreateEventDTO } from './dto/create-event.dto'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post('/participants')
    registerParticipant() {
        return this.appService.registerParticipant()
    }

    @Post('/event/:participantId')
    createEvent(
        @Param('participantId', ParseUUIDPipe) participantId: string,
        @Body() body: CreateEventDTO,
    ) {
        return this.appService.createEvent(participantId, body)
    }

    @Get('/event/:id')
    getEvent(@Param('id') id: string) {
        return this.appService.getEvent(id)
    }
}
