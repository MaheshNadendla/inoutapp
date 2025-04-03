import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography } from "@mui/material";

const InPageContainer = styled(Box)(({ theme }) => ({
  height: "340px",
  width: "450px",
  borderTopRightRadius: "40%",
  borderBottomLeftRadius: "40%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(10px)",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  borderRight: "2px solid rgba(255, 255, 255, 0.2)",
  borderLeft: "2px solid rgba(255, 255, 255, 0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    width: "380px",
    height: "300px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "280px",
  },
}));

const InBackBtn = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  height: "40px",
  width: "40px",
  backgroundColor: "blue",
  borderRadius: "50%",
  minWidth: "auto",

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    width: "50%",
    height: "3px",
    backgroundColor: "black",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  "&::before": { transform: "translate(-50%, -50%) rotate(-45deg)" },
  "&::after": { transform: "translate(-50%, -50%) rotate(45deg)" },

  [theme.breakpoints.down("sm")]: {
    height: "30px",
    width: "30px",
  },
}));

const InputField = styled(TextField)(({ theme }) => ({
  width: "250px",
  "& input": {
    fontSize: "18px",
    textAlign: "center",
    color: "white",
    borderBottom: "2px solid black",
  },

  [theme.breakpoints.down("md")]: {
    width: "220px",
    "& input": { fontSize: "16px" },
  },

  [theme.breakpoints.down("sm")]: {
    width: "200px",
    "& input": { fontSize: "14px" },
  },
}));

const SubmitBtn = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: "10px",
  right: "10px",
  height: "40px",
  width: "90px",
  borderRadius: "20px",
  backgroundColor: "blue",
  color: "white",
  fontSize: "12px",

  [theme.breakpoints.down("md")]: {
    width: "80px",
    fontSize: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70px",
    fontSize: "8px",
  },
}));

function InPage({ subInHead, BackBtn, rollTypeIn, setRollTypeIn, sendHomeToCollege }) {
  return (
    <div style={{position:'absolute',top:'50%',left:'50%',transform :"translate(-50%,-50%)"}}>
      {/* Heading is OUTSIDE the container */}
      <Typography variant="h6" sx={{ color: "white", mb: 2, textAlign: "center" }}>
        {subInHead}
      </Typography>

      <InPageContainer>
        {/* Back Button */}
        <InBackBtn onClick={BackBtn} />

        {/* Boy Student Roll Input */}
        <Typography sx={{ fontSize: "18px", pb: 1, color: "white" }}>Boy Student Roll</Typography>
        <InputField
          type="text"
          value={rollTypeIn}
          onChange={(e) => setRollTypeIn(e.target.value)}
          variant="standard"
        />

        {/* Submit Button */}
        <SubmitBtn onClick={sendHomeToCollege}>Send In</SubmitBtn>
      </InPageContainer>
    </div>
  );
}

export default InPage;
