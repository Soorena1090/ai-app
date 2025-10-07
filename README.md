# 🧠 AI-Powered Blog Platform

An **AI-driven blogging platform** built with **NestJS**, integrating
**OpenAI** for automated blog post generation.\
Users can register, log in, submit a topic --- and the AI generates a
complete blog post (title, content, and tags).\
The project demonstrates **mid-level backend development skills** in
**NestJS**, **MongoDB**, **Redis**, and **AI integration**.

------------------------------------------------------------------------

## 🚀 Tech Stack

  -----------------------------------------------------------------------
  Technology                               Purpose
  ---------------------------------------- ------------------------------
  **NestJS**                               Core backend framework for
                                           scalable, modular APIs

  **MongoDB + Mongoose**                   Database for users & posts
                                           with one-to-many relationships

  **Redis**                                Caching post lists & details
                                           to boost performance

  **OpenAI API**                           Generates blog content
                                           dynamically (title, body,
                                           tags)

  **JWT Authentication**                   Secure, token-based user
                                           authentication

  **Swagger**                              API documentation and testing
                                           UI

  **TypeScript**                           Strong typing & improved
                                           developer experience

  **Class-validator & DTOs**               Input/output validation

  **Jest**                                 Unit & e2e testing
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## ✨ Features

✅ **AI Content Generation** --- Automatically generates a blog post
from a topic.\
✅ **Full RESTful API** --- CRUD endpoints with pagination & filtering.\
✅ **JWT Authentication** --- Secure routes with guard protection.\
✅ **Caching Layer** --- Redis-based caching (1-hour TTL).\
✅ **Validation & DTOs** --- Clean, validated data flow.\
✅ **Swagger Docs** --- Interactive API testing via `/api`.\
✅ **Unit & e2e Tests** --- Ensuring code quality and stability.\
✅ **Error Handling & Logging** --- Custom exceptions for a smooth DX.

------------------------------------------------------------------------

## 🧩 Project Structure

    ai-blog-api/
    ├── src/
    │   ├── auth/
    │   │   ├── auth.controller.ts        # Handles registration & login
    │   │   ├── auth.service.ts           # Authentication logic
    │   │   ├── guards/                   # JWT and Local guards
    │   │   ├── strategies/               # Passport strategies
    │   ├── posts/
    │   │   ├── posts.controller.ts       # CRUD endpoints & AI post generation
    │   │   ├── posts.service.ts          # Core business logic + Redis caching
    │   │   ├── dto/                      # Data validation DTOs
    │   │   ├── interfaces/               # Interfaces for Mongoose models
    │   │   ├── schemas/                  # MongoDB schemas
    │   ├── users/
    │   │   ├── users.service.ts          # User management logic
    │   │   ├── dto/                      # DTOs for users
    │   │   ├── interfaces/               # User interfaces
    │   │   ├── schemas/                  # User schemas
    │   ├── app.module.ts                 # Root module
    │   ├── main.ts                       # Application entry point
    ├── test/
    │   ├── app.e2e-spec.ts               # e2e tests
    │   ├── posts.service.spec.ts         # Unit tests
    ├── .env                              # Environment variables
    ├── package.json                      # Dependencies & scripts
    ├── tsconfig.json                     # TypeScript configuration

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

``` bash
git clone <repository-url>
cd ai-blog-api
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

``` env
PORT=3000
MONGO_URI=mongodb://localhost:27017/ai-blog-db
REDIS_HOST=localhost
REDIS_PORT=6379
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here
```

### 4️⃣ Run the project

**Development mode:**

``` bash
npm run start:dev
```

**Production mode:**

``` bash
npm run build
npm run start:prod
```

### 5️⃣ Access API documentation

After running the app, visit:\
👉 **http://localhost:3000/api**

------------------------------------------------------------------------

## 🧪 Testing

Run all tests:

``` bash
npm run test
npm run test:e2e
```

Includes: - **Unit Tests:** Services (e.g. `posts.service.spec.ts`) -
**E2E Tests:** Endpoints (e.g. `app.e2e-spec.ts`)

------------------------------------------------------------------------

## 🧠 Example API Usage

  ------------------------------------------------------------------------------------------------------------------
  Action         Method         Endpoint                   Body / Headers
  -------------- -------------- -------------------------- ---------------------------------------------------------
  **Register**   `POST`         `/auth/register`           `{ "username": "testuser", "password": "password123" }`

  **Login**      `POST`         `/auth/login`              `{ "username": "testuser", "password": "password123" }`

  **Generate     `POST`         `/posts/generate`          `Authorization: Bearer <token>` +
  Post**                                                   `{ "topic": "Benefits of Programming" }`

  **List Posts** `GET`          `/posts?page=1&limit=10`   \-

  **Get Post**   `GET`          `/posts/:id`               \-
  ------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🎯 Alignment with Job Requirements

  ------------------------------------------------------------------------
  Skill                  Demonstrated In
  ---------------------- -------------------------------------------------
  **NestJS & Modular     Auth, Users, Posts modules with DI
  Architecture**         

  **AI Integration       Blog post generation logic
  (OpenAI)**             

  **MongoDB/Mongoose**   User-post relationship modeling

  **RESTful APIs**       CRUD endpoints, pagination, filtering

  **Security (JWT)**     Guard-based route protection

  **Caching (Redis)**    Post and list caching

  **Testing (Jest)**     Unit & e2e coverage
  ------------------------------------------------------------------------

------------------------------------------------------------------------

## 💡 Potential Improvements

-   📝 Add **update/delete** functionality for posts\
-   🐳 Include **Docker configuration** for easy deployment\
-   ⚙️ Implement **rate limiting** for abuse prevention\
-   🧾 Add **advanced logging** (e.g. Winston)

------------------------------------------------------------------------

## 👤 Contact

📧 **Author:** [Soorena Mahbobi](https://github.com/Soorena1090)\
💼 **GitHub Repository:**
[github.com/Soorena1090/ai-blog-api](https://github.com/Soorena1090/ai-blog-api)

------------------------------------------------------------------------

> 🧠 *"Combining AI creativity with developer precision --- one post at
> a time."*