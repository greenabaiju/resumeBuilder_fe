
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
  const [searchVal, setSearchVal] = useState("");

  const getResumeDatas = async () => {
    try {
      const response = await getResumes();
      setResumeData(response.data);
    } catch (error) {
      toast.error("Failed to get resumes");
    }
  };

  useEffect(() => {
    getResumeDatas();
  }, []);

  const onDeleteClick = async (id) => {
    try {
      const response = await deleteResume(id);

      if (response.status === 200) {
        toast.success("Resume deleted successfully");
        getResumeDatas();
      }
    } catch (error) {
      toast.error("Failed to delete resume");
    }
  };

  const filteredData = resumeData.filter((item) =>
    item.jobTitle?.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <Box sx={{ p: 3, maxWidth: 1000, mx: "auto" }}>
      <Typography variant="h5" fontWeight="bold" mb={1}>
        All Saved Resumes
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Search and manage your saved resumes.
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Search by job role..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        sx={{ mb: 3 }}
      />

      <TableContainer component={Paper} elevation={1}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1976d2" }}>
              <TableCell sx={{ color: "white" }}>No.</TableCell>
              <TableCell sx={{ color: "white" }}>Candidate Name</TableCell>
              <TableCell sx={{ color: "white" }}>Job Role</TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <TableRow key={item.id} hover>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.jobTitle}</TableCell>
                  <TableCell align="center">
                    <Button
                      component={Link}
                      to={`/resumes/${item.id}`}
                      variant="contained"
                      size="small"
                      sx={{ mr: 1, textTransform: "none" }}
                    >
                      Show Details
                    </Button>

                    <Button
                      onClick={() => onDeleteClick(item.id)}
                      color="error"
                      variant="outlined"
                      size="small"
                    >
                      <BiTrash size={18} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No resumes found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography mt={2} color="text.secondary">
        Total resumes: {filteredData.length}
      </Typography>
    </Box>
  );
};

export default Allresumes;
