import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Participant {
    @PrimaryGeneratedColumn('uuid')
    id: string
}
