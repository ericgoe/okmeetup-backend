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
import { PossibleAppointmentDTO } from './dto/possible-appointment.dto'

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

    @Post('/possible-appointments')
    uploadPossibleAppointments(@Body() message: PossibleAppointmentDTO) {
        return this.appService.uploadPossibleAppointments(message)

        /*
        [
{"startDate":"2022-12-03T09:30:00Z","endDate":"2022-12-03T10:30:00Z", "participant": "a3cb2093-2a82-4bb1-8cf9-b1ec376ff98d", "event": "ZvYehl"},
{"startDate":"2022-12-04T12:00:00Z","endDate":"2022-12-04T12:45:00Z", "participant": "a3cb2093-2a82-4bb1-8cf9-b1ec376ff98d", "event": "ZvYehl"},
{"startDate":"2022-12-05T09:00:00Z","endDate":"2022-12-05T09:55:00Z", "participant": "a3cb2093-2a82-4bb1-8cf9-b1ec376ff98d", "event": "ZvYehl"},
{"startDate":"2022-12-06T20:55:00Z","endDate":"2022-12-06T21:00:00Z", "participant": "a3cb2093-2a82-4bb1-8cf9-b1ec376ff98d", "event": "ZvYehl"},
{"startDate":"2022-12-010T15:20:00Z","endDate":"2022-12-010T15:50:00Z", "participant": "a3cb2093-2a82-4bb1-8cf9-b1ec376ff98d", "event": "ZvYehl"},
{"startDate":"2022-11-29T10:50:00Z","endDate":"2022-11-29T11:00:00Z", "participant": "a3cb2093-2a82-4bb1-8cf9-b1ec376ff98d", "event": "ZvYehl"}
]
                */
    }
}
