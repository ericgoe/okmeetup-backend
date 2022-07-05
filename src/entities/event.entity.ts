import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToMany,
    JoinTable,
    ManyToOne,
} from 'typeorm'
import { CreateEventDTO } from '../dto/create-event.dto'
import { Participant } from './participant.entity'

@Entity()
export class Event {
    @PrimaryColumn()
    id: string

    @ManyToOne(() => Participant)
    owner: Participant

    @ManyToMany(() => Participant)
    @JoinTable()
    participants: Participant[]

    @Column({
        nullable: true,
    })
    decidedTime: null | Date

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    startTimeSpan: Date

    @Column()
    endTimeSpan: Date

    idLength = 6

    constructor(owner: Participant, data: CreateEventDTO) {
        this.id = this.generateRandomString()
        this.owner = owner
        this.title = data.title
        this.description = data.description
        this.startTimeSpan = data.startTimeSpan
        this.endTimeSpan = data.endTimeSpan
    }

    generateRandomString(): string {
        let outString = ''
        const inOptions =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

        for (let i = 0; i < this.idLength; i++) {
            outString += inOptions.charAt(
                Math.floor(Math.random() * inOptions.length),
            )
        }

        return outString
    }
}
