import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
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
}
