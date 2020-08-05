import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@rodrigodoetickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
