import React, { useEffect, useMemo, useState } from "react";
import { Box, Typography, TextField,  } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { deleteResume, getResumes } from "../services/allApi";
import { Link } from "react-router-dom";


const Allresumes = () => {
  const [resumeData, setResumeData] = useState([]);
  const [duplicateData, setDuplicatesData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    getResumeDatas();
  }, []);

  const getResumeDatas = async () => {
    try {
      const apiResponse = await getResumes();

      console.log("Full API response:", apiResponse);
      console.log("Resume records:", apiResponse.data);
      setResumeData(apiResponse.data);
      setDuplicatesData(apiResponse.data);
    } catch (error) {
      console.log("API error:", error);
      toast.error("Failed to get resume data");
    }
  };

  const onDeleteClick = async (id) => {
    try {
      let apiResponse = await deleteResume(id);
      if (apiResponse.status == 200) {
        toast.success("successfully deleted");
      } else {
        toast.error("Failed");
      }
    } catch (error) {
      console.log("API error:", error);
      toast.error("Failed to delete resume ");
    }
  };

  const onSearchClick = useMemo(() => {
    let filteredData = duplicateData.filter((eachData) =>
      eachData.jobTitle.toLowerCase().includes(searchVal.toLowerCase()),
    )
    setResumeData(filteredData)
  }, [searchVal])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Box sx={{ padding: "30px 100px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "65px",
        }}
      >
        All Saved Resumes
      </Typography>

      <Typography sx={{ marginBottom: "55px", lineHeight: 1.7 }}>
        All resumes submitted to the platform in one place, allowing
        administrators or recruiters to efficiently view, search, filter, and
        manage candidate profiles. It provides a quick overview of available
        candidates and their key details, making the recruitment and
        candidate-selection process more organized and efficient.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <TextField
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search Candidate by their Job Roles"
          sx={{ width: "60%" }}
          size="small"
        />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="right">Resume</StyledTableCell>
              <StyledTableCell align="right">Job Role</StyledTableCell>
              <StyledTableCell align="right">...</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resumeData.map((eachData, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {eachData?.fullName}
                </StyledTableCell>

                <StyledTableCell align="right">
                  {eachData?.jobTitle}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <button onClick={() => onDeleteClick(eachData.id)}>
                    <BiTrash
                      style={{
                        color: "red",
                        fontSize: "22px",
                        cursor: "pointer",
                      }}
                    />
                  </button>
                  <Link to={`/resumes/${eachData?.id}`}>
  <button>Show Details</button>
</Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Allresumes;
