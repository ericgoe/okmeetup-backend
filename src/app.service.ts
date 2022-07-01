import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { identity } from 'rxjs'
import { Repository } from 'typeorm'
import { Event } from './entities/event.entity'
import { Participant } from './entities/participant.entity'
import { PossibleAppointment } from './entities/possible-appointment.entity'

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>,

        @InjectRepository(Participant)
        private readonly participantRepository: Repository<Participant>,

        @InjectRepository(PossibleAppointment)
        private readonly possibleAppointmentRepository: Repository<PossibleAppointment>,
    ) {}

    async registerParticipant() {
        const newParticipant = new Participant()
        const savedParticipant = await this.participantRepository.save(
            newParticipant,
        )

        return savedParticipant
    }

    async createEvent(){

        let newEvent: Event = null;
        let eventIdNotAvailable: boolean;

        while(newEvent == null || eventIdNotAvailable){

        newEvent = new Event();

        const numberOfEventsWithNewEventId = await this.eventRepository.count({
            where: {
                id: newEvent.id
            }
        });

        if (numberOfEventsWithNewEventId > 0){
            eventIdNotAvailable = true;
        }
        else eventIdNotAvailable = false;
    }

        const savedEvent = await this.eventRepository.save(newEvent);

        return savedEvent;
    }
}
