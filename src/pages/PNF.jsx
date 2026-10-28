import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import pagenotfound from "../assets/pnf.gif";

const PNF = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <img src={pagenotfound} alt="Page Not Found" width="700" />

      <Box>
        <Button component={Link} to="/" variant="contained" sx={{ m: 2 }}>
          Go Home
        </Button>
      </Box>
    </Box>
  );
};

export default PNF;