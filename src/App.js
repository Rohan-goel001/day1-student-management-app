import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const registerLearner = () => {
    if (!name || !age || !course) {
      alert("Please fill all fields");
      return;
    }

    if (age <= 18) {
      alert("Age must be above 18");
      return;
    }

    const newStudent = { name, age, course };
    setStudents([...students, newStudent]);

    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Student Management System 🎓</h1>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <br /><br />

      <button onClick={registerLearner}>
        Add Student
      </button>

      <h2>Student List</h2>

      {students.map((s, index) => (
  <div key={index}>
    <p>
      {s.name} | {s.age} | {s.course}
      <button
        onClick={() => {
          const updatedStudents = students.filter((_, i) => i !== index);
          setStudents(updatedStudents);
        }}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </p>
  </div>
))}
    </div>
  );
}

export default App;