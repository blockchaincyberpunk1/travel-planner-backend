# Travel Planner Backend

This directory contains the backend components for the Travel Planner project. These components handle server-side logic, database interactions, and API endpoints for managing user data and travel plans.

## Summary

The backend comprises controllers, models, routes, utilities, and configuration files necessary for the operation of the Travel Planner application:

1. **Controllers**:
    - **planController.js**: Controller for handling CRUD operations related to travel plans.
    - **userController.js**: Controller for managing user authentication and registration.

2. **Models**:
    - **Plan.js**: Mongoose model definition for storing travel plan data in the database.
    - **User.js**: Mongoose model definition for storing user data and authentication details.

3. **Routes**:
    - **planRoutes.js**: Express router for defining API endpoints related to travel plans.
    - **userRoutes.js**: Express router for defining API endpoints related to user authentication and registration.

4. **Utils**:
    - **dbConnect.js**: Utility file for connecting to the MongoDB database using Mongoose.
    - **gptHelper.js**: Utility file for integrating with the GPT (Generative Pre-trained Transformer) model for travel suggestions.

5. **Configuration Files**:
    - **.env**: Environment variables file containing sensitive configuration details.
    - **.env.example**: Example environment variables file with placeholder values.

6. **app.js**: Main entry point for configuring the Express application and defining middleware.

## Setup and Usage

1. Install dependencies using `npm install` or `yarn install`.
2. Configure environment variables by creating a `.env` file based on the `.env.example` template.
3. Start the server using `npm start` or `yarn start`.
4. Access the API endpoints using a tool like Postman or integrate them with the frontend application.

Ensure that MongoDB is running and accessible to the backend application for database operations.

## License

The backend components are provided under the MIT License. See individual files for details.
