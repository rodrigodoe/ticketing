import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@rodrigodoetickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
