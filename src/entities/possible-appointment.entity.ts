import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm'
import { Event } from './event.entity'
import { Participant } from './participant.entity'

@Entity()
export class PossibleAppointment {
    @PrimaryColumn()
    start: Date

    @ManyToOne(() => Participant)
    participant: Participant

    @ManyToOne(() => Event)
    event: Event

    @Column()
    duration: 30
}
