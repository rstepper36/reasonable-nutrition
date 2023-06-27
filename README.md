# Reasonable Nutrition Blog

Reasonable Nutrition Blog is a web application built with Node.js and Express.js that allows you to create, read, update, and delete blog posts related to nutrition. It provides a user-friendly interface for managing blog content and sharing valuable information with your audience.

## Features

- Create new blog posts with a title and content.
- View a list of all blog posts on the homepage.
- Edit existing blog posts to update their title or content.
- Delete unwanted blog posts from the database.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating
- Sequelize ORM for MySQL database integration
- HTML, CSS, and JavaScript for the frontend

## Installation

1. Clone the repository:

git clone https://github.com/rstepper36/reasonable-nutrition

2. Install the dependencies:
npm install body-parser ejs express mysql2 sequelize

3. Set up the MySQL database:
- Create a new MySQL database.
- Update the `config/database.js` file with your database connection details.

4. Run the database migrations:

npx sequelize-cli db:migrate


5. Start the application:

npm start


6. Open your browser and visit `http://localhost:3000` to access the Reasonable Nutrition Blog application.

## Usage

- To create a new blog post, click on the "Add New Post" link on the homepage and fill in the required information.
- To edit a blog post, click on the "Edit" button next to the respective post on the homepage.
- To delete a blog post, click on the "Delete" button next to the respective post on the homepage.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).





