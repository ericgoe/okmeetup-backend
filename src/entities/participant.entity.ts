import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Participant {
    @PrimaryGeneratedColumn('uuid')
    id: string

}
