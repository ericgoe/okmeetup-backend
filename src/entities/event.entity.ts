import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable, ManyToOne } from 'typeorm'
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

    idLength: number = 6;

    constructor(owner: Participant) {
        this.id = this.generateRandomString();
        this.owner = owner;
    }

 
    generateRandomString(): string {
        let outString: string = '';
        let inOptions: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
        for (let i = 0; i < this.idLength; i++) {
    
          outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
    
        }
    
        return outString;
      }
    
}
