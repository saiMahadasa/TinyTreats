const app = require("./app");
const ConnectDatabase = require("./db/Database");

// Handling uncaught Exception
// This listens for uncaught exceptions, which are errors that are not caught anywhere in the application.
// If an uncaught exception occurs, it logs the error message and then gracefully shuts down the server.
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for handling uncaught exception`);
  process.exit(1); // Exit the process after logging the error
});

// Config
// This block checks if the application is not in the production environment. 
// If it's not in production, it loads environment variables from a .env file located in the config directory.
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

//connect db

ConnectDatabase()

// Create server
// This starts the server and listens on the port defined in the environment variables.
// Once the server is running, it logs the URL to the console.
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Unhandled promise rejection
// This listens for unhandled promise rejections, which occur when a promise is rejected and there is no .catch() handler.
// If an unhandled promise rejection occurs, it logs the error message and then gracefully shuts down the server.
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server for unhandled promise rejection`);

  // Close the server and exit the process after handling the error
  server.close(() => {
    process.exit(1);
  });
});
