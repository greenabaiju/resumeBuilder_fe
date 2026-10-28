
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { deleteResume, getResumes } from "../services/allApi";
import { Link } from "react-router-dom";

const Allresumes = () => {
  const [resumeData, setResumeData] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    getResumeDatas();
  }, []);

  const getResumeDatas = async () => {
    try {
      const response = await getResumes();
      setResumeData(response.data);
      setDuplicateData(response.data);
    } catch (error) {
      toast.error("Failed to get resumes");
    }
  };

  useEffect(() => {
    const filteredData = duplicateData.filter((item) =>
      item.jobTitle?.toLowerCase().includes(searchVal.toLowerCase())
    );
    setResumeData(filteredData);
  }, [searchVal, duplicateData]);

  const onDeleteClick = async (id) => {
    try {
      const response = await deleteResume(id);

      if (response.status === 200) {
        toast.success("Resume deleted successfully");
        getResumeDatas();
      } else {
        toast.error("Failed to delete resume");
      }
    } catch (error) {
      toast.error("Failed to delete resume");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f7fb", p: { xs: 2, md: 5 } }}>
      <Box sx={{ maxWidth: "1100px", mx: "auto" }}>

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#00030a", mb: 1 }}
        >
          All Saved Resumes
        </Typography>

        <Typography sx={{ color: "#64748b", mb: 4 }}>
          Manage, search and view all candidate resumes in one place.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: 3,
            border: "1px solid #e2e8f0",
          }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Search by job role..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </Paper>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid #e2e8f0",
            overflowX: "auto",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#172554" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  #
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Candidate Name
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Job Role
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {resumeData.length > 0 ? (
                resumeData.map((item, index) => (
                  <TableRow
                    key={item.id}
                    hover
                    sx={{
                      "&:nth-of-type(even)": { bgcolor: "#f8fafc" },
                      "&:last-child td": { border: 0 },
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>

                    <TableCell sx={{ fontWeight: 600, color: "#334155" }}>
                      {item.fullName}
                    </TableCell>

                    <TableCell>
                      <Box
                        sx={{
                          display: "inline-block",
                          bgcolor: "#dbeafe",
                          color: "#1d4ed8",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: 13,
                        }}
                      >
                        {item.jobTitle}
                      </Box>
                    </TableCell>

                    <TableCell align="center">
                      <Button
                        component={Link}
                        to={`/resumes/${item.id}`}
                        variant="contained"
                        size="small"
                        sx={{
                          textTransform: "none",
                          bgcolor: "#2563eb",
                          mr: 1,
                          "&:hover": { bgcolor: "#1d4ed8" },
                        }}
                      >
                        Show Details
                      </Button>

                      <Button
                        onClick={() => onDeleteClick(item.id)}
                        color="error"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: 40 }}
                      >
                        <BiTrash size={18} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 5 }}>
                    <Typography color="text.secondary">
                      No resumes found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography
          sx={{ mt: 2, color: "#64748b", fontSize: 14 }}
        >
          Total resumes: {resumeData.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default Allresumes;
