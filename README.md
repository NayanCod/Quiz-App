# Hosted URl
Quiz app is deployed and live at https://nayan-quiz-app.netlify.app

# Local Setup Guide

This guide will walk you through setting up and running the **Quiz App** API locally on your machine.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

You can check if you have Node.js and npm installed by running the following commands:

```bash
node -v
npm -v
```

## Steps to run locally


- **Clone the repository**
```bash
git clone https://github.com/NayanCod/Quiz-App.git
```


- **Navigate to the Project Directory**
```bash
cd quiz-app
```


- **Install Dependencies**
```bash
npm install
```
If you encounter any errors during the installation, use the following command to install the dependencies with legacy peer dependencies:
```bash
npm install --legacy-peer-deps
````


- **Start the Development Server**
```bash
npm run dev
```


This will launch the project locally at http://localhost:3000

# Running the App with Docker

If you prefer to run the Quiz App within a Docker container, follow the instructions below.

## Prerequisites

Ensure Docker is installed on your machine. You can verify this by running:

```bash
docker -v
```

## Steps to Build and Run with Docker
**Clone the Respository**
```bash
git clone https://github.com/NayanCod/Quiz-App.git
```

**Navigate to the Project Directory**
```bash
cd quiz-app
```

**Build the Docker image by running:**
```bash
docker build -t quiz-app .
```

**Start the container from the built image:**
```bash
docker run -p 3000:3000 quiz-app
```

The app should now be running inside a Docker container and accessible at http://localhost:3000.

If 3000 is already allocated then use other port like 3001

