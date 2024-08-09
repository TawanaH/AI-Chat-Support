"use client";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundImage: "url('background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h2"
        color="white"
        sx={{
          marginBottom: 2,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Welcome to AI Chat Bot!
      </Typography>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button
          href="/auth/login"
          variant="contained"
          sx={{
            backgroundColor: "rgba(25, 118, 210, 0.4)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(21, 101, 192, 0.4)",
            },
            padding: "10px 20px",
            fontSize: "1.2rem",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, 0.1)",
            marginRight: "5px"
          }}
        >
          Login
        </Button>
        <Button
          href="/auth/signup"
          variant="contained"
          sx={{
            backgroundColor: "rgba(25, 118, 210, 0.4)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(21, 101, 192, 0.4)",
            },
            padding: "10px 20px",
            fontSize: "1.2rem",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, 0.1)",
            marginLeft: "5px"
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}
