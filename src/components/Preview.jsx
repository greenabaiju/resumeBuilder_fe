
import React from "react";
import { Box, Typography, Paper, Divider, Button } from "@mui/material";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Preview = ({ resumeData }) => {
  const onDownloadClick=async()=>{
    let resultEl=document.getElementById(resumeData.id?resumeData.id :"el")
    let canvas =await html2canvas(resultEl)
    let imgData = canvas.toDataURL('image/png')
    console.log(imgData)
  let pdf= new jsPDF('p','mm','a4')
  let pdfWidth =pdf.internal.pageSize.getWidth()
  let pdfHeight=(canvas.height*pdfWidth)/canvas.width
  pdf.addImage(imgData,'pdf',0,0,pdfWidth,pdfHeight)
  pdf.save('resume.pdf')
  }
  return (
    <Box sx={{ pl: 4 }}>
      <Button
        size="small"
        onClick={onDownloadClick}
        sx={{ color: "brown" }}
      >
        <FaFileDownload style={{ marginRight: "8px" }} />
        Download CV
      </Button>

      <Paper id={resumeData.id ? resumeData.id :"el"} elevation={2} sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          {resumeData?.fullName}
        </Typography>

        <Typography>Job Title: {resumeData?.jobTitle}</Typography>

        <Typography sx={{ my: 1 }}>
          Phone: {resumeData?.contactNumber}
        </Typography>

        <Typography sx={{ my: 1 }}>
          Email: {resumeData?.email}
        </Typography>

        <Typography sx={{ my: 1 }}>
          LinkedIn: {resumeData?.linkedin}
        </Typography>

        <Typography sx={{ my: 1 }}>
          GitHub: {resumeData?.github}
        </Typography>

        <Typography sx={{ my: 1 }}>
          Location: {resumeData?.location}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" fontWeight="bold">
          Professional Summary
        </Typography>

        <Typography sx={{ my: 1 }}>
          {resumeData?.summary}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" fontWeight="bold">
          Technical Skills
        </Typography>

        {resumeData?.skills?.map((eachSkill, index) => (
          <Typography key={index} component="span" sx={{ mr: 2 }}>
            {eachSkill}
          </Typography>
        ))}

        <Divider sx={{ my: 2 }} />

        <Typography sx={{ my: 1 }}>
          Bachelor's Degree in {resumeData?.degree}
        </Typography>

        <Typography sx={{ my: 1 }}>
          University/College: {resumeData?.university}
        </Typography>

        <Typography sx={{ my: 1 }}>
          Year of Graduation: {resumeData?.yog}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Preview;
