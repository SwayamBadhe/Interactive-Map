# Frontend Assignment - React Interactive Map

This React application implements an interactive map showcasing network availability and data usage based on regions. The map utilizes the `react-leaflet` library for mapping components.

## App.js

The `App.js` file is the main component of the React application. It fetches data from a specified API endpoint (`http://localhost:3001/api/data`) to dynamically create circles on the map. Each circle represents a region, and its size and color vary based on the data provided.

### Dependencies

- `react-leaflet`: Used for creating the interactive map.
- `leaflet`: Required dependency for `react-leaflet`.
- `fetch`: Used to retrieve data from the API endpoint.

### Installation and Setup

1. Install dependencies:
   ```bash
   npm install

2. Start the application:
   ```bash
   npm start

3. Open your browser and navigate to http://localhost:3000 to view the interactive map.

## Components

1. `MapWithCircles`
This component dynamically renders circles on the map based on the fetched data. Each circle represents a region, and its size and color are determined by the data. The `getColorBasedOnValue` function assigns colors to circles based on predefined data ranges.

2. `Circle`
A circle on the map with properties like center coordinates, radius, and styling options.

3. `Popup`
A popup that appears when a circle is clicked, providing details about the region and its data usage.

### Data Fetching
The `useEffect` hook fetches data from the API endpoint during component mount. The fetched data is then processed and used to update the state, triggering a re-render of the map.
