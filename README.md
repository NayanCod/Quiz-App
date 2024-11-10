# Quiz App - Local Setup Guide

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
git clone https://github.com/yourusername/quiz-app.git

- **Navigate to the Project Directory**
cd quiz-app

- **Install Dependencies**
npm install
If you encounter any errors during the installation, use the following command to install the dependencies with legacy peer dependencies:
npm install --legacy-peer-deps

- **Start the Development Server**
npm run dev

This will launch the project locally at http://localhost:3000

