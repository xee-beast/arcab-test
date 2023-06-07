
```
# Seat Allocating App - Zeshan Tariq for Arcab (Interview Sr Backend Dev)

This is a seat allocating application built with Node.js and Express.js. It provides a RESTful API for managing seat allocations for different routes and users.

## API Endpoints

### Create a User

- Endpoint: `/api/users`
- Method: `POST`
- Request Body:
  ```
  {
    "username": "JohnDoe",
    "email": "johndoe@example.com"
  }
  ```
- Response:
  ```
  {
    "id": "1",
    "username": "JohnDoe",
    "email": "johndoe@example.com"
  }
  ```

### Create a Route

- Endpoint: `/api/routes`
- Method: `POST`
- Request Body:
  ```
  {
    "from": "City A",
    "to": "City B"
  }
  ```
- Response:
  ```
  {
    "id": "1",
    "from": "City A",
    "to": "City B"
  }
  ```

### Create a Seat

- Endpoint: `/api/seats`
- Method: `POST`
- Request Body:
  ```
  {
    "seatNumber": "A1"
  }
  ```
- Response:
  ```
  {
    "id": "1",
    "seatNumber": "A1"
  }
  ```

### Book a Seat for a Route

- Endpoint: `/api/routes/:id/book`
- Method: `POST`
- Request Body:
  ```
  {
    "user": "1",
    "seatNumber": "A1"
  }
  ```
- Response:
  ```
  {
    "message": "Seat A1 booked successfully for User 1"
  }
  ```

## Folder Structure

- `controllers/`: Contains the controller files responsible for handling API requests and responses.
- `services/`: Contains the service files responsible for implementing business logic and interacting with the data layer.
- `routes/`: Contains the route files responsible for defining API endpoints and mapping them to the appropriate controllers.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
4. The API will be accessible at `http://localhost:3000`.

## Running Tests

To run the tests, use the following command:
```
npm test
```

## Technologies Used

- Node.js
- Express.js
```
