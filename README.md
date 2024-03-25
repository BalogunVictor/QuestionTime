# Next TailwindCSS Boilerplate
Boilerplate for Nextjs and TailwindCSS with some advance fixtures



QuestionTime Frontend
Welcome to the QuestionTime Frontend application! This application provides a user interface for managing questions and options on the QuestionTime platform. Users can create, edit, and delete questions with their associated options.

Features
Display existing questions and options in a user-friendly manner.
Create new questions with a minimum of 3 and a maximum of 5 options.
Add or remove options to existing questions.
Edit existing questions and their options.
Delete questions.

Technologies Used
1. Next
2. Typescript
3. TailwindCSS
4. class-variance-authority
5. Classnames
6. Story-book


Getting Started
To run this application locally, follow these steps:

Clone this repository to your local machine.
Install dependencies using npm install.
Start the development server using npm run dev.
Open your browser and navigate to http://localhost:3000.
Usage
Upon launching the application, users will be prompted to enter their email address to request a token.
After obtaining the token, users can proceed to manage questions using the provided features.
Users can view existing questions, create new questions, edit existing questions, and delete questions as needed.
Deployment
This application has been deployed to Vercel and is publicly accessible at https://question-time.vercel.app/.

API Documentation
For more information about the backend API used by this application, refer to the OpenAPI documentation.

Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.

License
This project is licensed under the MIT License.

Tests

Test Cases
Test for ESLint warnings or errors
Test for Prettier code style!
Test to ensure that the application successfully fetches a token upon entering an email address.
Test to verify that existing questions and options are displayed correctly on the main screen.
Test to check if a new question can be created with the minimum required options.
Test to confirm that additional options can be added to an existing question.
Test to ensure that options can be removed from an existing question.
Test to validate that an existing question can be edited successfully.
Test to verify that a question can be deleted from the system.
Test to check the responsiveness and layout of the application on different devices.

Test Suite
Utilize Jest as the testing framework.
Write unit tests for individual components using React Testing Library.
Write integration tests to simulate user interactions and API requests.
Ensure comprehensive test coverage for all features and edge cases.
Running Tests
Install dependencies using `npm install`.
 Run `yarn dev` command


Review test results and ensure all cases pass successfully.
By following the instructions outlined in the README, users can easily understand how to use the application and contribute to its development. Additionally, comprehensive test coverage ensures the reliability and stability of the application's functionality.
