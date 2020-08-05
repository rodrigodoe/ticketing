import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { ticketCreatedListener } from "./events/ticket-created-listener";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener conectado no NATS");

  stan.on("close", () => {
    console.log("Conexão com NATS fechada");
    process.exit();
  });

  new ticketCreatedListener(stan).listen();
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
