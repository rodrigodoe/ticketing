import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@rodrigodoetickets/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
