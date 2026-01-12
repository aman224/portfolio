# Portfolio Website

## Overview

This is a portfolio application built to showcase my skills and personality. I genuinely enjoyed working on this project and used a variety of tools along the way—ngl, it took me ages to settle on the current design. It’ll definitely evolve over time, but I’m pretty happy with where it’s at right now.

This is a full-stack **monorepo** application, with:

- The frontend built using **React.js + TypeScript** in the `frontend` folder, and
- The backend built using **Java Spring Boot** in the `backend` folder.

I chose a monorepo structure because it made the most sense for a small application like this and made the overall project easier to manage.

---

## Tech Stack

### Frontend

- React.js with Vite (v6.3.5)
- TypeScript
- HTML5 Canvas
- Material Design
- HTML & CSS

### Backend

- Java 25
- Maven
- Spring Boot
- Docker
- PostgreSQL

---

## How to Build

### Frontend

The frontend application is built using React.js with Vite for faster and more efficient development—mainly because I wanted to try it out and see the benefits for myself.

To run the frontend locally:

```bash
# Navigate to the root directory of the repository
cd frontend

# Install dependencies
npm i

# Start the development server
npm run dev

# Build for production
npm run build
```

### Backend

The backend application uses Maven to build the JAR file.

To build the backend:

```bash
# Navigate to the root directory of the repository
cd backend

# Build the application
./mvnw clean package
```

This will generate a .jar file inside the target directory.

### IN PROGRESS
