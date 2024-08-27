
----------------------------------------
Blog Application
----------------------------------------
This is a Blog application 
1. Signup/Login
2. Cloud Database using mongoDB
3. (CRUD) ->Creation,Details, Updation(if current user is creator), Deletion(if current user is creator), of Blogs
4. using MERN
 

--------------------------------
Getting Started
--------------------------------

STEP 1->
Clone the repository

STEP 2->
Open in IDE

STEP 3->
set your .env in root folder (details below)

STEP 4->
cd frontend ->
npm install ->
npm start


STEP 5->
cd backend ->
npm install
nodemon server.js

STEP 6->
BOOM... its Up and Running

-------------------------------------

------------------------------------------------
Environment Variables
------------------------------------------------

This application uses environment variables to configure the backend URL.
The following variables is required:
</br>

REACT_APP_BASE_BACKEND_URL =  *For example, http://localhost:4000.*
</br>
PORT=
</br>
MONGODB_URI =
</br>
JWT_SECRET_KEY = 
</br>
JWT_EXPIRES_IN  = 
</br>
You can set these variables in a .env file in the root of the project.



------------------------------------------------
Troubleshooting
------------------------------------------------

If you encounter any issues with the application, check the console for error messages. You can also try deleting the node_modules directory and running npm install or yarn install again to reinstall dependencies.
you may need to change url of localhost according to PORTS available


------------------------------------
Glimpse
------------------------------------

-------------------------------------
Future Plannings 
-------------------------------------
1. Add Google Login/Signup option
2. Implement Search
3. Implement SortBy
4. MyBlogs
5. CommentSection
6. Will add on later
   
------------------------------------------------
Contributing
------------------------------------------------

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.
