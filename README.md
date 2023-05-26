# User and Task Management APIs

This repository contains two RESTful APIs for user management and task management. The User Management API provides endpoints for user authentication, account management, email verification, and avatar handling. The Tasks API provides endpoints for creating, updating, deleting, and retrieving tasks.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- bcrypt.js
- JSON Web Tokens (JWT)
- Gravatar
- Jimp
- Joi

## Getting Started

To get started with the User and Task Management APIs, follow these steps:

1. Clone the repository:

``git clone https://github.com/your-username/user-task-management-api.git
cd user-task-management-api``

2. Install the dependencies:

``npm install``

Configure the environment variables:
Create a .env file in the root directory of the project and provide the following variables:

``EMAIL_SENDER=Your-verified-in-sendgrid.
PORT=3000
MONGO_URL=your-MongoDB-url
JWT_SECRET=your-secret-key``

Make sure to replace your-secret-key with your own secret key for JWT token generation.

4. Start the server:

``npm start``

The server will start running on the specified port (default: 3000) and connect to the MongoDB database.

##User Management API

The User Management API provides the following endpoints:

- POST /users/signup: Create a new user account.
- POST /users/login: Authenticate a user and generate a JWT token.
- GET /users/logout: Log out the currently authenticated user.
- GET /users/current: Get the details of the currently authenticated user.
- PATCH /users: Update the subscription of the currently authenticated user.
- PATCH /users/avatars: Upload and update the avatar image of the currently authenticated user.
- GET /users/verify/:verificationToken: Verify the user's email address using the verification token.
- POST /users/verify: Resend the verification email to the user.

For detailed information on request payloads and responses, please refer to the source code or API documentation.

## Tasks API

The Tasks API provides the following endpoints:

- GET /tasks: Get a list of all tasks.
- POST /tasks: Create a new task.
- PATCH /tasks/:id: Update a specific task.
- DELETE /tasks/:id: Delete a specific task.

For detailed information on request payloads and responses, please refer to the source code or API documentation.

## Contributing

Contributions to the User and Task Management APIs are welcome! If you find any issues or would like to suggest improvements, please submit a pull request or open an issue on the GitHub repository.

Before contributing, please make sure to read the Contribution Guidelines.

## License

This project is licensed under the MIT License.

## Acknowledgements

The User and Task Management APIs were developed with inspiration from various online resources and tutorials. Special thanks to the open-source community for their valuable contributions.

If you have any questions or need further assistance, please feel free to contact the project maintainers.

Happy coding!
