
![Produx](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/produx.png)
# Produx

This project is a simple CRUD (Create, Read, Update, Delete) web application designed to manage and interact with a database. It provides basic functionalities to create, read, update, and delete records, with user authentication for secure access.

Users can efficiently manage inventory for a small store, shop, or boutique. They can add, sort, and organize goods, calculate totals, and track their stock levels. The user-friendly interface allows for easy navigation, helping store owners maintain an organized and up-to-date inventory system.


## Features

- Home Page: Displays a summary of CRUD operations and statistics.
- User Authentication: Allows users to register and log in.
-  **CRUD Operations:**
    - **Create:** Add new records to the database.
    - **Read:** View existing records and their details.
    - **Update:** Modify existing records.
    - **Delete:** Remove records from the database.

![Mac-responsive](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/macbook.png)
![Mobile-responsive](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/mobil-responsive.png) ![Mobile-data](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/mobile-data.png)
![Tablet-responsive](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/tablet.png)

## User Authentication Summary:

- User Registration: Users can sign up on the registration page by providing a username and password. After successful registration, they are redirected to the login page.
- User Login: Users can log in using their credentials. Upon successful login, they are redirected to the homepage.
- uthorization: Access to certain pages requires users to be logged in. Unauthorized access attempts redirect to the login page.
- Error Handling: If login fails due to incorrect credentials or missing fields, an error message appears prompting the user to retry.
- Error messages are clear and user-friendly, guiding the user to correct their input or try again.
![Login](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/login.png) ![Register](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/register.png)

## Technologies Used:

- HTML/CSS/JavaScript - Utilized for crafting the frontend, ensuring a responsive and interactive user experience.
- Python - Employed as the programming language for server-side logic and backend development.
- Django - Framework used for developing the web application, providing a robust structure for managing views, URLs, and user authentication.
- PostgreSQL (via Gitpod) - Database solution used for data storage and management.
- psycopg2-binary==2.9.6 - Python library used for PostgreSQL database integration.


## Test Coverage Report

Automated unit tests were written to validate core back-end functionality of the application, including data validation, integrity, template rendering, and HTTP status codes. A total of 3 tests were executed successfully. The coverage package was utilized to assess and guide the coverage requirements.

### Test Summary:

- Total Tests Written: 3
- Tests Executed Successfully: 3
- Test Coverage Achieved: 72%
### Coverage Breakdown:

- Core Models and Views:
    - Models: 100% coverage
    - Views: 38% coverage (note: more detailed testing needed to cover additional view functionality)
    
- Settings and Middleware:
    - Settings: 100% coverage
    - ASGI/WSGI and Middleware: 0% coverage (no tests for ASGI/WSGI and middleware components)

- Manage.py:
    - Coverage: 82% (some portions of manage.py are not covered by tests)

- Manage.py:
    - Coverage: 82% (some portions of manage.py are not covered by tests)


### Key Points:

- Coverage Report Highlights:
    - auth_system components (including models.py, tests.py, urls.py, and admin.py): 100% coverage.
    - Core application files like settings.py and urls.py are fully covered.
    - Significant portions of the views.py file remain uncovered, suggesting a need for additional test cases.


### Future Plans:

- Expand Unit Tests:
    - Write additional tests to increase coverage for views, ensuring that all functionality is tested.
    - Develop tests for middleware, ASGI, and WSGI components to achieve comprehensive coverage.
    

### Upcoming Apps:

- Plan to write unit tests for the upcoming blog and users apps.
- Focus on achieving 100% coverage for these new apps, ensuring robust testing for all core functionalities.

    - This report outlines the current state of test coverage and identifies areas for improvement.
    ![Report](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/coverage-report.png)


## Manual Testing:

- All HTML files were passed through the W3C validator with no errors.
- Responsiveness was tested, and no issues were detected.
- All JavaScript were passed successfully through JSHint and return with no errors present.
- The website was tested on most browsers including Chrome, Firefox, Edge and Safari.
- All forms were tested to ensure they validate correctly and submit without errors.
- Used Lighthouse to improve performance and accessibility.


## Data Models:
![Diagram](https://github.com/samjamalcode/produx-pp4/blob/main/authentication/auth_system/static/images/readme/diagram.png)


## Design
- The development process was carried out using an Agile methodology with a focus on iterative development and continuous improvement.
- The project was managed using a GitHub Project board with user stories and tasks.
 Link to the GitHub Project board <https://github.com/users/samjamalcode/projects/1/views/1>

## Deployment Instructions

- Local Deployment:
    - Clone the repository from GitHub using the URL from the "Code" button.
    - Open your IDE and terminal, navigate to your desired directory, and run git clone <URL>.
    - Install dependencies with pip install -r requirements.txt.
    - Set up environment variables in your local environment.
    - Connect your database and run migrations with python manage.py migrate.
    - Create a superuser with python manage.py createsuperuser.
    - Start the server with python manage.py runserver and open the app in your browser.

- Heroku Deployment:
    - Log in to the Heroku dashboard and create a new app.
    - Connect your GitHub repository to the Heroku app.
    - Ensure the Python Buildpack is added in the Settings tab.
    - Set environment variables in the Config Vars section.
    - Enable automatic deploys in the Deploy tab.
    - Click "Deploy Branch" to deploy the app.
    - Once deployed, click "Open App" to view it.


## Credits

- Youtube channel:
<https://www.youtube.com/watch?v=KiRKUTDYlG8>
  

- Website:
  W3 Schools
  <https://www.youtube.com/watch?v=KiRKUTDYlG8>
  <https://readme.so/>
