import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Participant } from './participant.entity';

@Entity()
export class Event {
  @PrimaryColumn()
  id: string;

  @ManyToMany(() => Participant)
  @JoinTable()
  owner: Participant[];

  @Column({
    nullable: true,
  })
  decidedTime: null | Date;
}
