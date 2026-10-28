import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import landingImg from "../assets/landing.png";
import aboutimg from "../assets/resume.png";
import Stack from "@mui/material/Stack";
import team from "../assets/team.png";
import Grid from "@mui/material/Grid";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid7 from "../assets/grid7.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* banner */}
      <Box
        sx={{
          background: `url(${landingImg})`,
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: "30px",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          <Typography variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Designed To Get Hired. Your <br />
            Skills, Your Story, Your Next Job
            <br /> - All In One.
          </Typography>

          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "rgb(117, 88, 70)",
            }}
            component={Link}
            to={"/resume"}
          >
            Make your Resume with AI
          </Button>
        </Box>
      </Box>
      {/* About */}
      <Box>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "40px" }}
        >
          What's AI rBuilder
        </Typography>
        <Stack
          direction="row"
          sx={{
            gap: 15,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ marginLeft: "200px", textAlign: "justify" }}>
            An AI rBuilder is a web application that helps users create
            professional resumes quickly and efficiently using artificial
            intelligence. Traditional resume creation can be time-consuming and
            difficult, especially for freshers who may not know the correct
            format or keywords required for modern recruitment systems.
            <br />
            <br />
            The system can suggest job-specific keywords, professional
            summaries, and skill recommendations to make the resume more
            effective and ATS (Applicant Tracking System) friendly.
            <br />
            <br />
            The main goal of the AI rBuilder is to simplify the resume creation
            process and help job seekers build professional, well-structured
            resumes in a few minutes.
            <br />
            <br />
            This type of system is especially useful for students & fresh
            graduates, who want to create high-quality resumes that increase
            their chances of getting shortlisted for job interviews.
          </Typography>

          <img
            src={aboutimg}
            style={{
              height: "550px",
              marginRight: "100px",
              marginBottom: "30px",
            }}
            alt="About img"
          />
        </Stack>
      </Box>
      {/* Fixed img */}
      <Box
        sx={{
          background: `url(${team})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "80vh",
        }}
      ></Box>
      {/* Grid */}
      <Box sx={{ margin: "50px 200px" }}>
        <Typography sx={{ margin: "40px", textAlign: "center" }} variant="h4">
          Testimony
        </Typography>
        <Grid container spacing={3}>
          <Grid size={7}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Trusted by professionals worldwide.
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly.
              <br />
              <br />
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes.
              <br />
              <br />
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </Typography>
          </Grid>
          <Grid container size={5} spacing={2}>
            <Grid size={3}>
              <img src={grid1} />
            </Grid>
            <Grid size={3}>
              <img src={grid2} />
            </Grid>
            <Grid size={3}>
              <img src={grid3} />
            </Grid>
            <Grid size={3}>
              <img src={grid7} />
            </Grid>
            <Grid size={3}>
              <img src={grid1} />
            </Grid>
            <Grid size={3}>
              <img src={grid2} />
            </Grid>
            <Grid size={3}>
              <img src={grid3} />
            </Grid>
            <Grid size={3}>
              <img src={grid7} />
            </Grid>
            <Grid size={3}>
              <img src={grid1} />
            </Grid>
            <Grid size={3}>
              <img src={grid2} />
            </Grid>
            <Grid size={3}>
              <img src={grid3} />
            </Grid>
            <Grid size={3}>
              <img src={grid7} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
