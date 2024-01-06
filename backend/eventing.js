const dotenv = require('dotenv');
const eventSchemaModel = require('./models/index.js');
const connectDB = require('./db/connect.js');
const fs = require('fs');

dotenv.config();

class Events {
  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    this.events[eventName] = callback;
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const event = this.events[eventName];
    if (event) {
      event();

      const newEvent = new eventSchemaModel({
        event: eventName,
        triggerTime: Date.now(),
      });

      newEvent
        .save()
        .then((savedEvent) => {
          console.log(savedEvent);
          const eventData = JSON.stringify(savedEvent);

          fs.appendFileSync('app.log', eventData + '\n');
        })
        .catch((error) => {
          console.error(error);
        });

      const data = `${eventName} --> ${Date.now()}`;
      try {
        fs.writeFileSync('app.log', data + '\n');
      } catch (err) {
        console.error(err);
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    const events = new Events();

    events.on('click', () => {
      console.log('Hello');
    });

    events.on('click', () => {
      console.log('There!!!');
    });

    events.trigger('click');
    events.off('click');
  } catch (error) {
    console.log(error);
  }
};

start();
