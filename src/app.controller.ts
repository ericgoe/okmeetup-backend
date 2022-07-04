import { Controller, Post, Param, ParseUUIDPipe, Get} from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post('/participants')
    registerParticipant() {
        return this.appService.registerParticipant()
    }

    @Post('/event/:participantId')
    createEvent(@Param('participantId', ParseUUIDPipe) participantId : string) {
        return this.appService.createEvent(participantId);
    }

    @Get('/event/:id')
    getEvent(@Param('id') id : string) {
        return this.appService.getEvent(id);
    }

}
