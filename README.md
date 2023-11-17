
# Todo API

A todo list api using nodejs (expressjs) and mongodb (mongoose)

# Environment Variables
Note : all variables are string except port is a number
| variable | Description | Values ​​used |
|-----------|-----------|-----------|
|PORT|The port used in this application|3000|
|DB_USERNAME|The username used for authentication|omar|
|DB_PASSWORD|The password used for authentication|omar1234|
|DB_CLUSTER|The address of the MongoDB server to connect to|test.jyc6ghz.mongodb.net|
|DB_NAME|The name of the database to connect to|node-tuts|

# How To build your server:
1- npm install

2- npm run build

3- npm run start


# To run your server locally:
1- npm install

2- npm run dev

# How To use :
The first part of the url in my case : `http://localhost:3000/`
- `GET api/todo/`: Get the all to-do list
- `GET api/todo/:id`: GET a specific todo by ID.
- `GET api/todo/isCompleted:`: Get a list of all completed todo.
- `GET api/todo/isActive`: Get a list of all active todo.
- `POST api/todo/`: Creates a new todo.
```json
{
  "title":"Do something",
  "description":"Pla Pla ..."
}
```
- `PUT api/todo/complete/:id`: Updates the status of aspecific todo by ID.
```json
{
"completed": true
}
```
- `DELETE api/todo/:id`: Deletes a specific todo by ID.






