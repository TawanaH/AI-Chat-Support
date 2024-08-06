"use client";

import { useState } from "react";
import { Box, Stack, TextField, Button } from "@mui/material";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! I'm the Headstarter support assistnat. How can I help you today?`,
    },
  ]);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justiftContent="center"
      alignItems="center"
    >
      <Stack
        direction={"column"}
        width="500px"
        height="700px"
        spacing={2}
        border="1px solid black"
        p={2}
      >
        <Stack direction={"column"} spacing={2} flexGrow={1}>
          {messages.map((message, index) => (
            <Box
              key={index}
              display={"flex"}
              justifyContent={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
            >
              <Box
                bgcolor={
                  message.role === "assistant"
                    ? "primary.main"
                    : "secondary.main"
                }
                color={"white"}
                borderRadius={16}
                p={2}
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <TextField label="Message" fullWidth />
          <Button variant="contained">Send</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
