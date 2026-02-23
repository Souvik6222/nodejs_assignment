import express from "express";
import cors from "cors";

const app = express();
const PORT = 3005;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database
const students = [
  { id: 1, name: "Aarav Sharma", branch: "CSE", semester: 8, cgpa: 9.3 },
  { id: 2, name: "Ishita Verma", branch: "IT", semester: 7, cgpa: 8.9 },
  { id: 3, name: "Rohan Kulkarni", branch: "ECE", semester: 6, cgpa: 8.4 },
  { id: 4, name: "Meera Iyer", branch: "CSE", semester: 8, cgpa: 9.1 },
  { id: 5, name: "Kunal Deshmukh", branch: "IT", semester: 5, cgpa: 7.8 },
  { id: 6, name: "Ananya Reddy", branch: "CSE", semester: 6, cgpa: 8.7 },
  { id: 7, name: "Vikram Patil", branch: "ECE", semester: 7, cgpa: 8.2 },
  { id: 8, name: "Priyanka Nair", branch: "AI", semester: 4, cgpa: 8.8 },
  { id: 9, name: "Harsh Mehta", branch: "Data Science", semester: 5, cgpa: 8.0 },
  { id: 10, name: "Neha Gupta", branch: "CSE", semester: 6, cgpa: 7.9 },
  { id: 11, name: "Aditya Singh", branch: "Mechanical", semester: 7, cgpa: 8.1 },
  { id: 12, name: "Kavya Kumar", branch: "Civil", semester: 5, cgpa: 7.6 },
  { id: 13, name: "Rahul Joshi", branch: "CSE", semester: 4, cgpa: 8.5 },
  { id: 14, name: "Sneha Patel", branch: "IT", semester: 6, cgpa: 9.0 },
  { id: 15, name: "Arjun Nair", branch: "ECE", semester: 8, cgpa: 8.3 },
  { id: 16, name: "Divya Reddy", branch: "AI", semester: 3, cgpa: 9.2 },
  { id: 17, name: "Karan Malhotra", branch: "Data Science", semester: 6, cgpa: 8.6 },
  { id: 18, name: "Pooja Sharma", branch: "CSE", semester: 7, cgpa: 7.7 },
  { id: 19, name: "Rohit Verma", branch: "IT", semester: 5, cgpa: 8.4 },
  { id: 20, name: "Anjali Gupta", branch: "ECE", semester: 4, cgpa: 7.5 },
  { id: 21, name: "Vikas Yadav", branch: "Mechanical", semester: 6, cgpa: 7.9 },
  { id: 22, name: "Swati Deshmukh", branch: "Civil", semester: 7, cgpa: 8.2 },
  { id: 23, name: "Amit Kumar", branch: "CSE", semester: 3, cgpa: 9.4 },
  { id: 24, name: "Rashmi Iyer", branch: "AI", semester: 5, cgpa: 8.7 },
  { id: 25, name: "Suresh Patil", branch: "Data Science", semester: 8, cgpa: 8.0 }
];

// 1. GET /students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// 2. GET /students/topper
app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const topper = students.reduce((max, curr) =>
    curr.cgpa > max.cgpa ? curr : max
  );

  res.status(200).json(topper);
});

// 3. GET /students/average
app.get("/students/average", (req, res) => {
  const avg =
    students.reduce((sum, s) => sum + s.cgpa, 0) / students.length;

  res.status(200).json({ averageCGPA: Number(avg.toFixed(2)) });
});

// 4. GET /students/count
app.get("/students/count", (req, res) => {
  res.status(200).json({ totalStudents: students.length });
});

// 5. GET /students/:id
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// 6. GET /students/branch/:branchName
app.get("/students/branch/:branchName", (req, res) => {
  const branch = req.params.branchName.toLowerCase();

  const result = students.filter(
    (s) => s.branch.toLowerCase() === branch
  );

  res.status(200).json(result);
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});