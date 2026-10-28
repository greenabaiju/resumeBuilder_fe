import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Forms from "../components/Forms";
import Preview from "../components/Preview";

const ResumeDetails = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    location: "",
    jobTitle: "",
    email: "",
    contactNumber: 0,
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    yog: 0,
    summary: "",
    skills:[]
  });

  return (
    <Box sx={{ padding: "30px" }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Forms
            setResumeData={setResumeData}
            resumeData={resumeData}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Preview resumeData={resumeData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeDetails;