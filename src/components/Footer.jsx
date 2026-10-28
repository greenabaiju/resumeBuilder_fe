import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Box from "@mui/material/Box";


const Footer = () => {
  return (
    <>
      <Box
        sx={{ backgroundColor: "black", color: "white", padding: "50px 0px" }}
      >
        <Grid container spacing={3} sx={{ margin: "0px 100px" }}>
          <Grid size={4}>
            <Typography variant="h6" sx={{ padding: "10px 0px" }}>
              AI rBuilder
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              An AI rBuilder suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly. The main
              goal of the AI Powered Resume Builder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes.
            </Typography>
          </Grid>
          <Grid size={4}></Grid>
          <Grid size={4}>
            <Typography variant="h6" sx={{ padding: "10px 0px" }}>
              Contact Us
            </Typography>
            <Typography>
              <MdEmail /> resumebuilder@gmail.com
            </Typography>

            <Typography>
              <FaPhoneAlt /> +91 9876543210
            </Typography>
            <Typography variant="h6" sx={{ padding: "10px 0px" }}>
              Connect With Us
            </Typography>
            <Typography>
              <FaWhatsapp /> <FaInstagram /> <FaWhatsapp />
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ margin: "0px 100px" }}>
          <Grid size={12}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Designed & built with ❤️ using React
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
