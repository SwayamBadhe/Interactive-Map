# Backend Service for Frontend Assignment

This Node.js Express application serves as the backend for the frontend assignment. It provides an API endpoint to fetch data related to regions and their corresponding data usage. The data is stored in a JSON file (`data.json`) and is exposed through the `/api/data` endpoint.

## Server.js

The `server.js` file initializes the Express application, sets up necessary middleware such as CORS, and defines the API endpoint to serve the data.

### Dependencies

- `express`: Web framework for Node.js.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `data.json`: Sample data representing regions and their data usage.

### Installation and Setup

1. Install dependencies:
   ```bash
   npm install

2. Start the server:
  ```
  node server.js
  ```

#### The server will be running at http://localhost:3001. You can access the API endpoint at http://localhost:3001/api/data.

### API Endpoint

The `GET /api/data` endpoint of the backend service returns an array of objects, each representing a region with the following properties:

- **id:** Unique identifier for the region.
- **region:** Name of the region.
- **latitude:** Latitude coordinates of the region.
- **longitude:** Longitude coordinates of the region.
- **data:** Data usage for the region.

- 
Example Data:
```
[
  {
    "id": 1,
    "region": "US",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "data": 290
  },
  // ... (other region objects)
]
```
