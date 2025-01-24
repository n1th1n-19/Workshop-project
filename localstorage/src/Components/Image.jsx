import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import axios from "axios";


export default function Image() {
  const [url, seturl] = useState([]);
  const [refresh, setRefresh] = useState("");

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data.message, 111);
        seturl(res.data.message);
      })
      .catch((err) => {
        console.log(err, 22);
      });
  }, [refresh]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={url}
          sx={{ height: "60vh", width: "300px", backgroundColor: "blue" }}
        ></Box>
        <br />
        <br />
        <Button onClick={() => setRefresh(!refresh)} variant="contained">
          Refresh
        </Button>
      </Box>
      <br />

      <br />
    </div>
  );
}
