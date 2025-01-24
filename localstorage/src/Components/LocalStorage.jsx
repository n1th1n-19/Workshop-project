import React, { useState } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";

export default function LocalStorage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved successfully!");
  };

  const handleShowData = () => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      alert(`Stored Data: ${storedData}`);
    } else {
      alert("No data found in localStorage!");
    }
  };

  const handleRemoveData = () => {
    localStorage.removeItem("formData");
    alert("Stored data removed successfully!");
  };

  const handleClearFields = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
    });
    alert("Form fields cleared!");
  };

  return (
    <div style={{ margin: "20px", padding: "20px", backgroundColor: "#e3f2fd", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)" }}>
      <Box 
        component="form" 
        sx={{
          display: "flex", 
          flexDirection: "column", 
          gap: 2, 
          padding: "25px", 
          backgroundColor: "#ffffff", 
          borderRadius: "12px", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
              name="name" 
              type="text" 
              placeholder="Enter your Name" 
              label="Name" 
              fullWidth 
              variant="outlined"
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
              sx={{ backgroundColor: "#f4f6f8", borderRadius: "8px" }}
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ padding: "12px", borderRadius: "8px", fontWeight: "bold", fontSize: "16px" }}
              onClick={handleSave}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="secondary" 
              fullWidth
              sx={{ padding: "12px", borderRadius: "8px", fontWeight: "bold", fontSize: "16px" }}
              onClick={handleShowData}
            >
              Show Data
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="error" 
              fullWidth
              sx={{ padding: "12px", borderRadius: "8px", fontWeight: "bold", fontSize: "16px" }}
              onClick={handleRemoveData}
            >
              Remove Data
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="outlined" 
              color="primary" 
              fullWidth
              sx={{ padding: "12px", borderRadius: "8px", fontWeight: "bold", fontSize: "16px" }}
              onClick={handleClearFields}
            >
              Clear Fields
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}