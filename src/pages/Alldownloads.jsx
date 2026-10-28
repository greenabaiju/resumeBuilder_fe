
import React, { useState, useEffect } from "react";
import { getResumes } from "../services/allApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Preview from "../components/Preview";

const Alldownloads = () => {
  const [resumeDatas, setResumeDatas] = useState([]);

  useEffect(() => {
    getResumeData();
  }, []);

  const getResumeData = async () => {
    try {
      let apiResponse = await getResumes();

      if (apiResponse.status === 200) {
        setResumeDatas(apiResponse.data);
      } else {
        toast.error("API call failed");
      }
    } catch (error) {
      toast.error("API call failed");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        All Downloads
      </Typography>

      {resumeDatas.length > 0 ? (
        <Grid container spacing={5}>
          {resumeDatas.map((eachResume, index) => (
            <Grid size={6} key={eachResume.id || index}>
              <Button
                component={Link}
                to={`/resumes/${eachResume.id}`}
                variant="contained"
                sx={{ mb: 2 }}
              >
                View Details
              </Button>

              <Preview resumeData={eachResume} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No resumes available</Typography>
      )}
    </Box>
  );
};

export default Alldownloads;
