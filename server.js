import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgresql.js";
const server = fastify();

// GET, POST, PUT, DELETE, PATCH

const database = new DatabasePostgres();

server.get("/videos", (request) => {
  const search = request.query.search;

  const videos = database.list(search);

  return videos;
});

// request body

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send;
});

// route parameter
server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });
  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);

  return reply.status(204).send();
});

server.get("/", () => {
  return "Hello World";
});

server.get("/node", () => {
  return "Hello Node.js";
});

server.listen({
  port: 3333,
});
