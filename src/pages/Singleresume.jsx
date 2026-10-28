import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleResume, updateResume } from "../services/allApi";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Modal,
  Grid,
  MenuItem,
} from "@mui/material";
import Preview from "../components/Preview";
import { FaEdit, FaFileDownload, FaHome } from "react-icons/fa";
import jobjson from "../assets/jobRole.json";
import summaryjson from "../assets/summaries.json";
import skillsjson from "../assets/jobSkills.json";



const Singleresume = () => {
  const [singleResume, setSingleResume] = useState({
    fullName: "",
    location: "",
    jobTitle: "",
    email: "",
    contactNumber: 0,
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    yog: 0,
    summary: "",
    skills: [],
    id: 0,
  });
  const [newSkill, setNewSkill] = useState("");
  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState("");
  const { id } = useParams();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getData();
  }, [id]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 450 },
    maxHeight: "90vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
  };

  const getData = async () => {
    try {
      const apiResponse = await getSingleResume(id);

      if (apiResponse.status === 200) {
        setSingleResume(apiResponse.data);
      } else {
        toast.error("Failed to get data");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to get data");
    }
  };

  const handleUpdate = () => {
    toast.info("Connect your update API to save the changes.");
  };

  const onJobRoleChange = (role) => {
    setSingleResume({
      ...singleResume,
      jobTitle: role,
      summary: summaryjson[role],
      skills: skillsjson[role],
    });
  };

  const addNewSkill = () => {
    setSingleResume({
      ...singleResume,
      skills: [...singleResume.skills, newSkill],
    });
  };

  const onUpdateClick = async () => {
    try {
      let apiResponse = await updateResume(id, singleResume);
      if (apiResponse.status == 200) {
        toast.success("updated successfully");
        handleClose();
      } else {
        toast.error("updation failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("updation failed");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          margin: "20px auto",
        }}
      >
       

        <Button onClick={handleOpen} size="small" sx={{ color: "brown" }}>
          <FaEdit /> Edit CV
        </Button>

        <Button size="small" component={Link} to="/" sx={{ color: "brown" }}>
          <FaHome /> Home
        </Button>
      </Box>

      <Box sx={{ margin: { xs: "20px", md: "50px 100px" } }}>
        <Preview resumeData={singleResume} />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              backgroundColor: "#5c494c",
              color: "white",
              padding: "8px",
              textAlign: "center",
            }}
          >
            Edit Resume Details
          </Typography>

          <Stack spacing={2} sx={{ marginTop: "24px" }}>
            <Typography fontWeight="bold" variant="h6">
              Personal Details
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              id="fullname"
              label="Full Name"
              variant="standard"
              value={singleResume?.fullName}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  fullName: e.target.value,
                })
              }
            />

            <TextField
              sx={{ width: "100%" }}
              id="location"
              label="Location"
              variant="standard"
              value={singleResume?.location}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  location: e.target.value,
                })
              }
            />

            <TextField
              sx={{ width: "100%" }}
              id="jobTitle"
              label="Choose Job"
              variant="standard"
              select
              value={singleResume?.jobTitle}
              onChange={(e) => onJobRoleChange(e.target.value)}
            >
              {jobjson?.jobRoles?.map((eachJob, index) => (
                <MenuItem key={index} value={eachJob}>
                  {eachJob}
                </MenuItem>
              ))}
            </TextField>

            <Typography fontWeight="bold" variant="h6">
              Contact Details
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              id="email"
              label="Email"
              variant="standard"
              value={singleResume?.email}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  email: e.target.value,
                })
              }
            />

            <TextField
              sx={{ width: "100%" }}
              id="contactNumber"
              label="Contact Number"
              variant="standard"
              value={singleResume?.contactNumber}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  contactNumber: e.target.value,
                })
              }
            />

            <TextField
              sx={{ width: "100%" }}
              id="linkedin"
              label="LinkedIn Link"
              variant="standard"
              value={singleResume?.linkedin}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  linkedin: e.target.value,
                })
              }
            />

            <TextField
              sx={{ width: "100%" }}
              id="github"
              label="GitHub Link"
              variant="standard"
              value={singleResume?.github}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  github: e.target.value,
                })
              }
            />

            <Typography fontWeight="bold" variant="h6">
              Educational Details
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              id="degree"
              label="Bachelor's Degree"
              variant="standard"
              value={singleResume?.degree}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  degree: e.target.value,
                })
              }
            />

            <TextField
              sx={{ width: "100%" }}
              id="university"
              label="College/University Name"
              variant="standard"
              value={singleResume?.university}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  university: e.target.value,
                })
              }
            />

            <TextField
              sx={{ width: "100%" }}
              id="yog"
              label="Year of Graduation"
              variant="standard"
              value={singleResume?.yog}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  yog: e.target.value,
                })
              }
            />

            <Typography fontWeight="bold" variant="h6">
              Skills
            </Typography>

            <Stack direction="row" spacing={2}>
              <TextField
                onChange={(e) => setNewSkill(e.target.value)}
                label="Add Skill"
                size="small"
                fullWidth
              />

              <Button
                onClick={addNewSkill}
                variant="contained"
                sx={{ backgroundColor: "#5c494c" }}
              >
                Add
              </Button>
            </Stack>

            <Grid sx={{ mb: 3, gap: 4.5 }}>
              {singleResume?.skills?.map((eachSkill) => (
                <Button
                  key={eachSkill}
                  sx={{
                    bgcolor: "#b69b9b",
                    color: "#fff",
                    px: 2,
                    py: 1,
                    m: 1,
                    borderRadius: 1,
                    boxShadow: "0 2px 5px #0002",
                    fontSize: 15,
                  }}
                >
                  {eachSkill}
                </Button>
              ))}
            </Grid>

            <Typography fontWeight="bold" variant="h6">
              Summary
            </Typography>

            <TextField
              sx={{ width: "100%" }}
              id="summary"
              label="Summary"
              variant="standard"
              multiline
              rows={3}
              value={singleResume.summary}
              onChange={(e) =>
                setSingleResume({
                  ...singleResume,
                  summary: e.target.value,
                })
              }
            />

            <Button
              variant="contained"
              onClick={onUpdateClick}
              sx={{
                backgroundColor: "#5c494c",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#46373a",
                },
              }}
            >
              Update CV
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Singleresume;
