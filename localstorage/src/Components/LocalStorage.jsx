import React from "react";
import { Box, TextField, Grid, Button } from "@mui/material";

export default function LocalStorage() {
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
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ padding: "12px", borderRadius: "8px", fontWeight: "bold", fontSize: "16px" }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}