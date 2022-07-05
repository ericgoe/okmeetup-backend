// this file is there for demo purposes only

import { Participant } from 'src/entities/participant.entity'
import { Event } from 'src/entities/event.entity'

export class PossibleAppointmentDTO {
    startDate: Date
    endDate: Date
    participant: Participant
    event: Event
}
