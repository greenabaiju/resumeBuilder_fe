import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FcDocument } from "react-icons/fc";
import { FcDownload } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const ResumeGenerate = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginTop: "30px", fontWeight: "bold" }}
      >
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>
      <Grid
        container
        spacing={30}
        sx={{ margin: "30px 200px", textAlign: "center" }}
      >
        <Grid size={6}>
          <Box sx={{ boxShadow: 2, padding: "20px" }}>
            <FcDocument size={40} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              Add Your Details
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              Our AI will generate Skills & Summary
            </Typography>
            <Typography sx={{ marginTop: "10px", fontWeight: "bold" }}>
              Step 1
            </Typography>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box sx={{ boxShadow: 2, padding: "20px" }}>
            <FcDownload size={40} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              Download Your Resume
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              Get your ATS-friendly resume instantly
            </Typography>
            <Typography sx={{ marginTop: "10px", fontWeight: "bold" }}>
              Step 2
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center" }}>
        <Button component={Link}
            to={"/resume-details"}
          sx={{
            backgroundColor: "rgb(113, 74, 47)",
            color: "white",
            marginBottom: "100px",
          }}
        >
          LET'S START
        </Button>
      </Box>
    </>
  );
};

export default ResumeGenerate;
