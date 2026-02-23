#  Student CGPA API

REST API built using Express.js to manage student CGPA records using in-memory JSON.

##  Objective
Create RESTful GET APIs for student performance.

##  Routes Implemented

| Method | Route                        | Description |
|--------|------------------------------|-------------|
| GET    | /students                    | Get all students |
| GET    | /students/topper             | Get top CGPA student |
| GET    | /students/average            | Get average CGPA |
| GET    | /students/count              | Get total students |
| GET    | /students/:id                | Get student by ID |
| GET    | /students/branch/:branchName| Get students by branch |

##  Run Locally

```bash
npm install
npm start