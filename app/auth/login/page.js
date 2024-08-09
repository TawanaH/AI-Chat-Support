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
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    doSignInWithEmailAndPassword(email, password)
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const onGoogleSignIn = () => {
    doSignInWithGoogle()
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        setErrorMessage(err.message);
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
          backdropFilter: "blur(15px)",
          backgroundColor: "rgba(255, 255, 255, 0.125)",
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
            onClick={onSubmit}
            fullWidth
            sx={{
              backgroundColor: "rgba(25, 118, 210, 0.4)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(21, 101, 192, 0.4)",
              },
              padding: "10px 20px",
              fontSize: "1.2rem",
              boxShadow: "0 3px 5px 2px rgba(33, 203, 243, 0.1)",
            }}
          >
            Sign in
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onGoogleSignIn}
            fullWidth
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none", 
              padding: "8px 16px", 
            }}
          >
            Sign in with&nbsp;
            <GoogleIcon style={{ marginLeft: 8, fontSize: 20 }} />
          </Button>
          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Don&apos;t have an account?{" "}
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
