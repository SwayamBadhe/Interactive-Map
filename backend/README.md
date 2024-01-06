# Events Logging System

This project implements an events logging system using Node.js, MongoDB, and the file system for logging. The system is designed to handle event registration, triggering, and logging to both MongoDB and an app.log file.

## Files and Modules

### 1. `eventing.js`

The `eventing.js` file defines the `Events` class responsible for managing events. It includes methods for event registration (`on`), triggering (`trigger`), and event handler removal (`off`). The class also logs events to both MongoDB and an `app.log` file.

Usage example:
   ```
    const events = new Events();
    
    events.on('click', () => {
      console.log('Hello');
    });
    
    events.on('click', () => {
      console.log('There!!!');
    });
    
    events.trigger('click');
    events.off('click');
```

### 2. `db/connect.js`
The `connectDB` module provides a simple function to connect to a MongoDB database. It is used to establish a connection to the database before working with events.

Usage example:
  ```
    const connectDB = require('./db/connect.js');

    // Example usage:
    try {
      await connectDB(process.env.MONGODB_URI);
      // Perform operations with the database
    } catch (error) {
      console.log(error);
    }
```

### `models/index.js`

The `models/index.js` file defines the MongoDB schema for events. It uses Mongoose to create a model for events with fields such as `event` and `triggerTime`.

Usage:

```
    const eventSchemaModel = require('./models/index.js');
    
    // Example usage:
    const newEvent = new eventSchemaModel({
      event: 'click',
      triggerTime: Date.now(),
    });
    
    newEvent
      .save()
      .then((savedEvent) => {
        console.log(savedEvent);
      })
      .catch((error) => {
        console.error(error);
      });
```

### Setup
1. Install dependencies:

``` 
npm install
```

2. Set up a MongoDB database and provide the connection URI in the `.env` file:


```
MONGODB_URI=your_mongodb_uri
```

3. Run the application:

```
node eventing.js
```
This system allows you to manage and log events efficiently, with both MongoDB and local file system storage.



