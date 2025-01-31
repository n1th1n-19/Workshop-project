import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Grid,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

export default function LocalStorage() {
  const [formData, setFormData] = useState({
    emp_id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track index of the row being edited

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setTableData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Check for empty fields
    if (
      !formData.emp_id ||
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.address
    ) {
      alert("All fields are required!");
      return;
    }

    // Check for duplicates
    const isDuplicate = tableData.some(
      (data) =>
        data.emp_id === formData.emp_id ||
        (data.name === formData.name &&
          data.phone === formData.phone &&
          data.email === formData.email &&
          data.address === formData.address)
    );

    if (isDuplicate) {
      alert("Duplicate entry! Data already exists.");
      return;
    }

    if (editIndex !== null) {
      // If editing, update the specific row
      const updatedData = [...tableData];
      updatedData[editIndex] = formData;
      setTableData(updatedData);
      localStorage.setItem("formData", JSON.stringify(updatedData));
      alert("Row updated successfully!");
      setEditIndex(null); // Reset editIndex
    } else {
      // If not editing, add new data
      const updatedData = [...tableData, formData];
      setTableData(updatedData);
      localStorage.setItem("formData", JSON.stringify(updatedData));
      alert("Form data saved successfully!");
    }
    // Clear form after saving
    setFormData({
      emp_id: "",
      name: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(tableData[index]); // Prepopulate form fields with the row's data
    setEditIndex(index); // Set the index of the row being edited
  };

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    alert("Row deleted successfully!");
  };

  const handleClearFields = () => {
    setFormData({
      emp_id: "",
      name: "",
      phone: "",
      email: "",
      address: "",
    });
    setEditIndex(null); // Reset editIndex
    alert("Form fields cleared!");
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        backgroundColor: "#e3f2fd",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: "25px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="emp_id"
              type="number"
              placeholder="Enter your Id"
              label="Id"
              fullWidth
              variant="outlined"
              required
              sx={{ backgroundColor: "#f4f6f8", borderRadius: "8px" }}
              value={formData.emp_id}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              type="text"
              placeholder="Enter your Name"
              label="Name"
              fullWidth
              variant="outlined"
              required
              sx={{ backgroundColor: "#f4f6f8", borderRadius: "8px" }}
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone"
              type="tel"
              placeholder="Enter your Phone"
              label="Phone"
              fullWidth
              variant="outlined"
              required
              sx={{ backgroundColor: "#f4f6f8", borderRadius: "8px" }}
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              type="email"
              placeholder="Enter your Email"
              label="Email"
              fullWidth
              variant="outlined"
              required
              sx={{ backgroundColor: "#f4f6f8", borderRadius: "8px" }}
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              type="text"
              placeholder="Enter your Address"
              label="Address"
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              required
              sx={{ backgroundColor: "#f4f6f8", borderRadius: "8px" }}
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSave}
            >
              {editIndex !== null ? "Update" : "Save"}
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={handleClearFields}
            >
              Clear Fields
            </Button>
          </Grid>
        </Grid>
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.emp_id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(index)}>
                    <EditIcon color="success" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(index)}>
                    <DeleteSharpIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
