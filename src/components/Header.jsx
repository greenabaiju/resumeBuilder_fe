import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logoimg from "../assets/logoimg.png";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { Stack } from "@mui/material";


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#000309" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img style={{ width: "40px" }} src={logoimg}  alt="Logo img" />
          </IconButton>
          <Typography variant="h6" component={Link} to={"/"} sx={{ flexGrow: 1,color:'white',textDecoration:'none' }}>
            Resume Builder
          </Typography>
          <Stack direction={"row"} sx={{gap:6}}>
            <Typography sx={{ color:'white',textDecoration:'none' }} variant="h6" component={Link} to={"/all-resumes"}>
              All Resumes
            </Typography>
            <Typography sx={{ color:'white',textDecoration:'none' }} variant="h6" component={Link} to={"/all-downloads"}>
              All Downloads
            </Typography>
             <Tooltip sx={{ color:'white',textDecoration:'none' }} title="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF." placement="bottom-start">
          <Button>About Us</Button>
        </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
