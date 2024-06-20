
# Microservice Authentication with Nest.js and Next.js

## Overview
This project is a small application aimed at learning microservices architecture and authentication using Nest.js and Next.js. It serves as a practical introduction to building scalable and secure web applications with modern technologies.

## Features
- **Microservices Architecture**: Utilizes Nest.js for building microservices, emphasizing scalability and modularity.
- **Authentication**: Implements secure authentication mechanisms using Nest.js and integrates it with Next.js frontend.
- **Frontend Development**: Uses Next.js for frontend development, focusing on server-side rendering and a great developer experience.

## Technologies Used
- **Nest.js**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Next.js**: React framework for server-rendered applications, providing a great developer experience with features like SSR and automatic code splitting.
- **JWT (JSON Web Tokens)**: Used for secure authentication between microservices and frontend.

## Installation
1. Clone the repository:
2. Install dependencies for both backend (Nest.js microservices) and frontend (Next.js):

## Getting Started
1. **Backend (Nest.js Microservices)**:
- Run the gateway:
  ```
  cd gateway
  npm run start:dev
  ```
  - The gateway(backend) should now be running on `http://localhost:3000`.

  - Run the microservices:
  ```
  cd crud-microservice
  npm run start:dev
  ```


2. **Frontend (Next.js)**:
- Start the Next.js development server:
  ```
  cd auth-nextjs
  npm run dev
  ```
- Open your browser and go to `http://localhost:3001` to see the application running.

## Usage
- Navigate through the application to explore different features related to microservices and authentication.
- Use the provided authentication flows to understand how Authentication are used for secure communication between services and the frontend.

## Contributing
Contributions are welcome! If you have any suggestions, improvements, or issues, please open an issue or a pull request on GitHub.

