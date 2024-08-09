"use client";

import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
} from "@mui/material";
import { doCreateUserWithEmailAndPassword } from "@/hooks/auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        setMessage("Sign up successful!");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const redirectToLogin = () => {
    router.push("/auth/login");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          padding: 4,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
          Sign Up
        </Typography>
        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {String(errorMessage)}
          </Alert>
        )}
        {message && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {String(message)}
          </Alert>
        )}
        <Stack spacing={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              input: { color: "white" },
              label: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onSubmit}
            fullWidth
          >
            Sign Up
          </Button>
          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            <Link
              component="button"
              variant="body2"
              onClick={redirectToLogin}
              sx={{ color: "lightblue", textDecoration: "underline" }}
            >
              Click here to log in.
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
