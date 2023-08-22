## Supermarket List API

API in Node.js using Express and Mongoose to connect a MongoDB Database
The main objective is to make life easier for application users who go to the supermarket and
forget the items they went to buy.
So this API aims to organize this shopping list.

### Technologies used

- Node.js
- Express
- Mongoose
- MongoDB
- Nodemon

### Required Technologies

- Node.js installed (https://nodejs.org/en)
- MongoDB instace running:
Ex: Running with docker:
```
docker run --name supermarket-list -p 27017:27017 -d mongo
```

### Steps to run the project

1. Clone the repo: 
```
https://github.com/luisdandolini/supermarket-backend.git
```
2. Navigate to the path:
```
cd supermarket-list-api
```

3. Install the dependencies:
```
npm install
```

4. Run the API:
```
npm run start:dev
```

### Important Rule
Is necessary send the username at the requisition header

### Available endpoints

[GET]/list-items
[POST]/list-items
[DELETE]/list-items/:id
[PUT]/list-items/:id