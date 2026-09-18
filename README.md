# NodeJS-Basic-Routes-Assignment7

A beginner-friendly Node.js Express assignment created to understand **route parameters, query parameters, dynamic routing, and handling request data using `req.params` and `req.query`.**

## Tasks

1. **Route Parameters**
2. **Query Parameters**
3. **Student Profile using Route Parameters & Query Parameters**

## Project Structure

```text
├── Task-1
│   ├── Screenshots
│   └── server.js
│
├── Task-2
│   ├── Screenshots
│   └── server.js
│
├── Task-3
│   ├── Screenshots
│   └── server.js
│
├── README.md
└── package.json
```

## Concepts Used

- Node.js
- Express.js
- Express Routing
- Dynamic Routes
- Route Parameters
- Query Parameters
- `req.params`
- `req.query`
- `res.send()`

## Tasks Performed

### Task 1 - Route Parameters

Created a dynamic route using a student ID.

Route:

```text
GET /student/:id
```

The student ID is extracted using `req.params`.

Example:

```text
/student/101
```

The response is:

```text
Student ID: 101
```

Another example:

```text
/student/205
```

The response is:

```text
Student ID: 205
```

### Task 2 - Query Parameters

Created a `/search` route to accept `name` and `course` as query parameters.

Route:

```text
GET /search
```

Example:

```text
/search?name=Ricky&course=Node.js
```

The response is:

```text
Name: Ricky
Course: Node.js
```

If no search data is provided:

```text
/search
```

The response is:

```text
No search data provided.
```

### Task 3 - Student Profile

Created a dynamic `/student/:id` route using both route parameters and query parameters.

The student ID is received using `req.params`, while `name` and `course` are received using `req.query`.

Example:

```text
/student/101?name=John&course=FullStack
```

The response is:

```text
Student ID: 101
Name: John
Course: FullStack
```

## How to Run

Navigate to the assignment folder:

```bash
cd NodeJS-Assignment7
```

Install the required dependency:

```bash
npm install
```

Run Task-1:

```bash
node Task-1/server.js
```

Run Task-2:

```bash
node Task-2/server.js
```

Run Task-3:

```bash
node Task-3/server.js
```

The server will run on:

```text
http://localhost:3000
```

Run **one task at a time** because all three tasks use port `3000`.

## Routes

| Task | Method | Route | Expected Output |
|------|--------|-------|-----------------|
| Task 1 | GET | `/student/:id` | Student ID |
| Task 2 | GET | `/search?name=&course=` | Name and Course |
| Task 3 | GET | `/student/:id?name=&course=` | Student ID, Name and Course |

## Expected Output

### Task 1

```text
Student ID: 101
```

### Task 2

```text
Name: Ricky
Course: Node.js
```

### Task 2 - No Data

```text
No search data provided.
```

### Task 3

```text
Student ID: 101
Name: John
Course: FullStack
```

## Author

**Sanika Kangane 👩🏻‍💻**
