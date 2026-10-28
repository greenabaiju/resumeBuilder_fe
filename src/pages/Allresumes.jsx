
import React, { useEffect, useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
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

  // Search
  useEffect(() => {
    const filteredData = duplicateData.filter((item) =>
      item.jobTitle.toLowerCase().includes(searchVal.toLowerCase())
    );

    setResumeData(filteredData);
  }, [searchVal, duplicateData]);

  // Delete
  const onDeleteClick = async (id) => {
    try {
      const response = await deleteResume(id);

      if (response.status === 200) {
        toast.success("Resume deleted");
        getResumeDatas();
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Failed to delete resume");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" textAlign="center" mb={4}>
        All Saved Resumes
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Search by Job Role"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        sx={{ mb: 3 }}
      />

      <table width="100%" cellPadding="12">
        <thead>
          <tr>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {resumeData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.fullName}</td>
              <td>{item.jobTitle}</td>
              <td>
                <button onClick={() => onDeleteClick(item.id)}>
                  <BiTrash style={{ color: "red" }} />
                </button>

                <Link to={`/resumes/${item.id}`}>
                  <button>Show Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Allresumes;
