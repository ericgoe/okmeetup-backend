import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PossibleAppointmentDTO } from '../dto/possible-appointment.dto'
import { Event } from './event.entity'
import { Participant } from './participant.entity'

@Entity()
export class PossibleAppointment {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    startDate: Date

    @Column()
    endDate: Date

    @ManyToOne(() => Participant)
    participant: Participant

    @ManyToOne(() => Event)
    event: Event

    constructor(dto: PossibleAppointmentDTO) {
        this.startDate = dto.startDate
        this.endDate = dto.endDate
        this.participant = dto.participant
        this.event = dto.event
    }

    convertPossibleAppointmentsFromDto(dto: PossibleAppointment) {
        // dto
    }
}
