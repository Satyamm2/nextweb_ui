import React, { useState, useEffect } from "react";

function Home() {
  const [formData, setFormData] = useState({ name: "", lname: "" });
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("data")) || [];
    setData(saved);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("data", JSON.stringify(items));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { ...formData };

    let updatedData = [...data];
    if (editIndex !== null) {
      updatedData[editIndex] = newEntry;
      setEditIndex(null);
    } else {
      updatedData.push(newEntry);
    }

    setData(updatedData);
    saveToLocalStorage(updatedData);
    setFormData({ name: "", lname: "" }); // reset form
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = data.filter((_, i) => i !== index);
    setData(filtered);
    saveToLocalStorage(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="First Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
          required
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <h3>Saved Data</h3>
      <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i}>
              <td>{entry.name}</td>
              <td>{entry.lname}</td>
              <td>
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
