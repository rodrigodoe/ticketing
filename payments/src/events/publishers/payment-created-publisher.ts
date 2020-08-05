import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@rodrigodoetickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
