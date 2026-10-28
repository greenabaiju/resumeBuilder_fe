import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import landingImg from "../assets/landing.png";
import aboutimg from "../assets/resume.png";
import Stack from "@mui/material/Stack";
import team from "../assets/team.png";
import Grid from "@mui/material/Grid";
import grid1 from "../assets/g1.avif";
import grid2 from "../assets/g2.avif";
import grid3 from "../assets/g3.avif";
import grid4 from "../assets/g4.jpg";
import grid5 from "../assets/g5.avif";
import grid6 from "../assets/g6.jpg";
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
      <Box sx={{ bgcolor: "#f8f6f3", py: 8, px: { xs: 2, md: 8 } }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
        >
          What People Say
        </Typography>

        <Typography
          sx={{ textAlign: "center", color: "text.secondary", mb: 5 }}
        >
          Helping job seekers create professional resumes with ease.
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Build Your Future With Confidence
            </Typography>

            <Typography color="text.secondary" lineHeight={1.9}>
              Create a professional resume that highlights your skills,
              experience, and achievements. Our AI Resume Builder helps
              students, freshers, and professionals prepare job-ready resumes
              quickly and easily.
            </Typography>

            <Button
              component={Link}
              to="/resume"
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: "#755846",
                textTransform: "none",
                px: 3,
                py: 1,
                "&:hover": { bgcolor: "#594131" },
              }}
            >
              Create Your Resume
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {[grid1, grid2, grid3, grid4, grid5, grid6].map(
                (img, index) => (
                  <Grid size={{ xs: 4 }} key={index}>
                    <Box
                      sx={{
                        bgcolor: "white",
                        p: 1,
                        borderRadius: 3,
                        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={img}
                        alt={`Professional ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: { xs: 100, md: 145 },
                          objectFit: "cover",
                          borderRadius: 2,
                          display: "block",
                        }}
                      />
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
