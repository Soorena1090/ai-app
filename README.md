AI-Powered Blog Platform
This project is a NestJS-based blog platform with AI-driven content generation using OpenAI. It allows users to register, log in, provide a topic, and have AI generate a complete blog post (title, content, and tags). Posts are stored in MongoDB with Mongoose, and Redis is used for caching to optimize performance. The project features a modular architecture, RESTful APIs, JWT authentication, and Swagger documentation, demonstrating mid-level proficiency in backend development and AI integration.
This repository serves as a portfolio project to showcase skills for a Junior to Mid-level NestJS Developer position, aligning with job requirements for expertise in NestJS, Node.js, MongoDB, AI tools, and RESTful API design.
Tech Stack

NestJS: Core framework for building modular, scalable APIs.
MongoDB & Mongoose: For storing users and posts with one-to-many relationships.
Redis: For caching post lists and individual posts to enhance performance.
OpenAI API: For generating blog post content (title, 300-500 word content, and tags).
JWT Authentication: For secure user authentication with token-based access.
Swagger: For API documentation (available at /api).
TypeScript: For strong typing and reduced runtime errors.
Class-validator & DTOs: For input/output validation and structured data transfer.
Jest: For unit and end-to-end (e2e) testing.

Features

Modular Architecture: Separate modules for auth, users, and posts with dependency injection.
RESTful API: Full CRUD endpoints with pagination and filtering support.
AI Integration: Generates blog posts using OpenAI based on user-provided topics.
Caching: Redis caching for post lists and individual posts (1-hour TTL).
Authentication: User registration and login with JWT and route protection using guards.
Validation: DTOs and ValidationPipe for robust input/output validation.
Error Handling: Custom HttpException handling and basic logging.
API Documentation: Swagger docs at /api for easy API exploration.
Testing: Includes unit tests (e.g., posts.service.spec.ts) and e2e tests (e.g., app.e2e-spec.ts).

Prerequisites

Node.js: Version 18 or higher.
MongoDB: Local or cloud-based (e.g., MongoDB Atlas).
Redis: Local or cloud-based.
OpenAI API Key: Obtain from openai.com.
JWT Secret: A random secret for signing JWT tokens.

Installation and Setup

Clone the Repository:
git clone <repository-url>
cd ai-blog-api


Install Dependencies:
npm install


Create .env File:Create a .env file in the project root with the following:
PORT=3000
MONGO_URI=mongodb://localhost:27017/ai-blog-db
REDIS_HOST=localhost
REDIS_PORT=6379
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here


Run the Project:

Development mode:npm run start:dev


Production mode:npm run build
npm run start:prod




View API Documentation:After running the app, visit http://localhost:3000/api to explore Swagger docs.

Test the API:Use Postman or curl to interact with the API:

Register: POST /auth/register with body { "username": "testuser", "password": "password123" }
Login: POST /auth/login with body { "username": "testuser", "password": "password123" } (returns JWT token)
Generate Post: POST /posts/generate with header Authorization: Bearer <token> and body { "topic": "Benefits of Programming" }
List Posts: GET /posts?page=1&limit=10
Get Post Details: GET /posts/:id



Project Structure
ai-blog-api/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts        # Handles registration and login
│   │   ├── auth.service.ts           # Authentication logic
│   │   ├── guards/                   # JWT and Local guards
│   │   ├── strategies/               # Passport strategies
│   ├── posts/
│   │   ├── posts.controller.ts       # Post endpoints (create, list, details)
│   │   ├── posts.service.ts          # AI post generation and caching logic
│   │   ├── dto/                      # DTOs for validation and output
│   │   ├── interfaces/               # Mongoose interfaces
│   │   ├── schemas/                  # MongoDB schemas
│   ├── users/
│   │   ├── users.service.ts          # User management
│   │   ├── dto/                      # DTOs for users
│   │   ├── interfaces/               # User interfaces
│   │   ├── schemas/                  # User schemas
│   ├── app.module.ts                 # Root module
│   ├── main.ts                       # Application entry point
├── test/
│   ├── app.e2e-spec.ts               # End-to-end tests
│   ├── posts.service.spec.ts         # Unit tests
├── .env                              # Environment variables
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration

Testing

Unit Tests: For services (e.g., posts.service.spec.ts).
E2E Tests: For API endpoints (e.g., app.e2e-spec.ts).Run tests:

npm run test
npm run test:e2e

Alignment with Job Posting
This project meets the requirements of the job ad:

Proficiency in NestJS and Modular Architecture: Uses separate modules, dependency injection, and best practices like DTOs and pipes.
AI Proficiency: Integrates OpenAI for blog post generation with error handling and response parsing.
MongoDB and Mongoose Expertise: Implements one-to-many relationships (user-posts), indexing, and validation.
RESTful API and Client-Server Architecture: Provides standardized endpoints with pagination, authentication, and Swagger documentation.
Bonus: Incorporates Redis for caching, JWT for security, and tests for code quality.

Potential Improvements

Add update/delete functionality for posts.
Implement advanced logging with Winston.
Add rate limiting to prevent API abuse.
Include Docker configuration for easier deployment.

Contact
For questions or feedback, reach out via [https://github.com/Soorena1090].