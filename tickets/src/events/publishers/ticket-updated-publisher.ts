import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@rodrigodoetickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
