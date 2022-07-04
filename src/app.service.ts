import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { identity } from 'rxjs'
import { Repository } from 'typeorm'
import { Event } from './entities/event.entity'
import {Participant } from './entities/participant.entity'
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

    async createEvent(participantId : string){

        let newEvent: Event = null;
        let eventIdNotAvailable: boolean;
        let owner : Participant = await this.getParticipant(participantId);

        while(newEvent == null || eventIdNotAvailable){

        newEvent = new Event(owner);

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

        let savedEvent = await this.eventRepository.save(newEvent);

        return savedEvent;
    }

    async getEvent(id: string){
        try{
            return await this.eventRepository.findOneByOrFail({
                id: id
            });
        }
        catch {
            throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
        }
    }

    private async getParticipant(participantId: string){
        try{
            return await this.participantRepository.findOneByOrFail({
            id: participantId
        })
    } catch{
        throw new HttpException('Participant not registered', HttpStatus.NOT_FOUND);
    }

    }
}
