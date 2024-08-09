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
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "@/hooks/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      router.push("/home");
    }
  };

  const onGoogleSignIn = () => {
    doSignInWithGoogle()
      .then((result) => {
        router.push("/home");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  const redirectToSignUp = () => {
    router.push("/auth/signup");
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
          Login
        </Typography>
        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {String(errorMessage)}
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
            Sign In
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onGoogleSignIn}
            fullWidth
          >
            Sign in with Google
          </Button>
          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Don't have an account?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={redirectToSignUp}
              sx={{ color: "lightblue", textDecoration: "underline" }}
            >
              Click here to sign up.
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
