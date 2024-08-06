# LeetCode Clone

Welcome to the **LeetCode Clone** repository! This project replicates the functionalities of the popular coding practice platform, LeetCode. Whether you're a coding enthusiast or a beginner, this guide will help you navigate and use the LeetCode Clone effectively.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Installation](#installation)
6. [Running the Project](#running-the-project)
7. [Using Firebase](#using-firebase)
8. [Usage](#usage)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## Introduction

LeetCode Clone is designed to provide a similar experience to LeetCode, allowing users to solve coding problems, practice algorithms, and improve their coding skills. Perfect for anyone looking to prepare for coding interviews or enhance their problem-solving abilities, our platform offers a range of features to support your coding journey.

## Features

- **User Authentication**: Securely register and log in to track your progress.
- **Problem List**: Browse a variety of coding problems across different difficulty levels.
- **Code Editor**: Write and run your code directly on the platform with our integrated editor.
- **Submissions**: Submit your solutions and receive immediate feedback.
- **Discussion Forum**: Engage with the community, ask questions, and share solutions.

## Technologies Used

This project leverages modern web development technologies to deliver a robust and interactive experience:

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **CodeMirror**: Versatile text editor implemented in JavaScript for the code editor functionality.

### Backend

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express.js**: Minimal and flexible Node.js web application framework.
- **MongoDB**: NoSQL database for storing user data and problem sets.

### Tools

- **Git**: Version control system for tracking changes in source code.
- **GitHub**: Hosting service for version control and collaboration.
- **Postman**: API testing tool.
- **Docker**: Container platform for packaging the application and its dependencies.
- **Firebase**: Platform for building web and mobile applications, used for authentication and database.

## Getting Started

To get started with LeetCode Clone, follow these steps:

### Prerequisites

Ensure you have the following installed on your computer:

- **Git**: For cloning the repository.
- **Node.js**: To run the project.
- **npm**: Node package manager, usually comes with Node.js.
- **Docker**: (Optional) For containerized setup.
- **Firebase Account**: For authentication and database services.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/saiisback/leetcode_clone.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd leetcode_clone
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Running the Project

### Using Node.js

1. **Start the Backend Server**:
   ```bash
   cd backend
   npm start
   ```
2. **Start the Frontend Server**:
   ```bash
   cd frontend
   npm run dev
   ```
3. Open your web browser and go to `http://localhost:3000` to see the application in action.

### Using Docker (Optional)

1. **Build Docker Containers**:
   ```bash
   docker-compose build
   ```
2. **Start Docker Containers**:
   ```bash
   docker-compose up
   ```

## Using Firebase

Firebase is used for user authentication and real-time database functionalities. Follow these steps to set up Firebase:

1. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add project" and follow the instructions to create a new project.

2. **Add Firebase to Your Web App**:
   - In your Firebase project, navigate to Project Settings.
   - In the "Your apps" section, select the web icon to get the Firebase SDK configuration.

3. **Configure Firebase in Your Project**:
   - Create a `.env` file in the root of your project.
   - Add the Firebase configuration details to the `.env` file:
     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. **Initialize Firebase in Your Code**:
   - In your `frontend` directory, create a `firebase.js` file.
   - Add the following code to initialize Firebase:
     ```javascript
     import firebase from 'firebase/app';
     import 'firebase/auth';
     import 'firebase/firestore';

     const firebaseConfig = {
       apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
       authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
       projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
       storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
       messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
       appId: process.env.REACT_APP_FIREBASE_APP_ID,
     };

     firebase.initializeApp(firebaseConfig);

     export const auth = firebase.auth();
     export const firestore = firebase.firestore();
     ```

## Usage

### Register and Log In

- **Register**: Create a new account by providing a username, email, and password.
- **Log In**: Access your account using your email and password.

### Solve Problems

1. **Browse Problems**: Explore the list of available coding problems.
2. **Select a Problem**: Click on a problem to view its details.
3. **Write Code**: Use the built-in code editor to write your solution.
4. **Run Code**: Test your solution with sample inputs.
5. **Submit Code**: Submit your code to see if it passes all test cases.

### Discussion Forum

- **Ask Questions**: Post your questions if you need help.
- **Share Solutions**: Discuss different approaches with the community.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button on GitHub.
2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/your-username/leetcode_clone.git
   ```
3. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Your Changes**: Implement your feature or bug fix.
5. **Commit Your Changes**:
   ```bash
   git commit -m "Add feature/your-feature-name"
   ```
6. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Open a pull request on the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or need further assistance, feel free to contact the project maintainer:

- **Name**: Sai
- **GitHub**: [saiisback](https://github.com/saiisback)
- **Email**: [karthiksaiketha@gmail.com](mailto:karthiksaiketha@gmail.com)
