import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Participant {
  @PrimaryColumn()
  id: string;
}
