# NestJs

## Events vs Messages

> Message Driven Architecture

In the context of NestJS, "Message" and "Event" are two different concepts related to communication and interaction between different parts of an application, especially when using a message-driven architecture or an event-driven architecture. Let's explore the differences between them:

1. **Message:**
   - A message is a piece of information that is sent from one component or module to another within an application.
   - Messages are typically used in a request-response fashion, where a sender sends a message and expects a response from the receiver.
   - Messages are often used for synchronous communication between different parts of the application.
   - They are well-suited for scenarios where immediate action or response is required.
   - Examples of messages could include API requests, method calls, or RPC (Remote Procedure Call) style interactions.

2. **Event:**
   - An event is a notification that something has happened in the application. It represents a change in the application's state.
   - Events are used in an asynchronous manner. Components or modules can publish events, and other components can subscribe to those events to react to them.
   - Events are particularly useful in scenarios where you want to decouple different parts of the application and allow them to respond to changes without direct dependencies.
   - Events can be broadcasted to multiple subscribers without those subscribers having to directly communicate with the event producer.
   - Examples of events could include user registration, a new item added to a shopping cart, or a sensor detecting a certain condition.

In the context of NestJS, which is a framework for building scalable Node.js applications, you might encounter both message-driven and event-driven patterns. NestJS provides tools and libraries to facilitate both types of communication, including:

- **Message-Driven:** NestJS offers HTTP modules and decorators to handle synchronous communication via APIs and controllers. You can use HTTP methods like GET, POST, PUT, DELETE to exchange messages.

- **Event-Driven:** For event-driven architectures, NestJS offers a module called `@nestjs/event-emitter` that allows you to publish and subscribe to events. This is particularly useful for decoupling different parts of the application, such as sending notifications or triggering actions when certain events occur.

In summary, while both messages and events facilitate communication and interaction in an application, messages are typically used for synchronous communication and immediate responses, whereas events are used for asynchronous communication to notify about changes and trigger reactions in a decoupled manner.