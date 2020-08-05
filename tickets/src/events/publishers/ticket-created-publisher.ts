import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@rodrigodoetickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
