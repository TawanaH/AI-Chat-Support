"use client";

import { useState, useEffect } from "react";
import {
	Box,
	Stack,
	TextField,
	Button,
	styled,
	Container,
} from "@mui/material";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const CenteredContainer = styled(Container)(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "90vh",
	color: "white",
}));

export default function Home() {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!user && !loading) {
			return router.push("/auth/login");
		}
	}, [user, loading, router]);

	const [messages, setMessages] = useState([
		{
			role: "assistant",
			content: `Hi! I'm the Headstarter support assistant. How can I help you today?`,
		},
	]);

	const sendMessage = async () => {
		setMessage("");
		setMessages((messages) => [
			...messages,
			{ role: "user", content: message },
			{ role: "assistant", content: "" },
		]);
		const response = fetch("/api/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([
				...messages,
				{ role: "user", content: message },
			]),
		}).then(async (res) => {
			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let result = "";
			return reader.read().then(function processText({ done, value }) {
				if (done) {
					return result;
				}
				const text = decoder.decode(value || new Uint8Array(), {
					stream: true,
				});
				setMessages((messages) => {
					let lastMessage = messages[messages.length - 1];
					let otherMessages = messages.slice(0, messages.length - 1);

					return [
						...otherMessages,
						{ ...lastMessage, content: lastMessage.content + text },
					];
				});

				return reader.read().then(processText);
			});
		});
	};

	const [message, setMessage] = useState("");

	return (
		<>
			{!user ? (
				<Box
					sx={{
						width: "100vw",
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						padding: 10,
						backgroundImage: "url('/background.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<CenteredContainer>Not Authorized</CenteredContainer>
				</Box>
			) : (
				<Box
					sx={{
						width: "100vw",
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						padding: 10,
						backgroundImage: "url('/background.jpg')",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<Stack
						direction={"column"}
						sx={{
							width: "1000px",
							height: "1000px",
							borderRadius: 2,
							padding: 2,
							spacing: 3,
							backdropFilter: "blur(15px)",
							backgroundColor: "rgba(255, 255, 255, 0.125)",
						}}
					>
						<Stack
							direction={"column"}
							spacing={2}
							sx={{
								flexGrow: 1,
								overflow: "auto",
								maxHeight: "100%",
							}}
						>
							{messages.map((message, index) => (
								<Box
									key={index}
									display={"flex"}
									justifyContent={
										message.role === "assistant"
											? "flex-start"
											: "flex-end"
									}
								>
									<Box
										sx={{
											bgcolor:
												message.role === "assistant"
													? "rgba(33, 150, 243, 0.4)"
													: "rgba(97, 97, 97, 0.4)",
											color: "white",
											borderRadius: 5,
											padding: 3,
										}}
									>
										{message.content}
									</Box>
								</Box>
							))}
						</Stack>
						<Stack direction={"row"} spacing={2}>
							<TextField
								label="Message"
								fullWidth
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								InputProps={{
									style: {
										color: "white",
									},
								}}
								InputLabelProps={{
									style: {
										color: "white",
									},
								}}
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor:
												"rgba(255, 255, 255, 0.5)",
										},
										"&:hover fieldset": {
											borderColor:
												"rgba(255, 255, 255, 0.7)",
										},
										"&.Mui-focused fieldset": {
											borderColor:
												"rgba(255, 255, 255, 0.7)",
										},
									},
									"& .MuiInputLabel-root": {
										color: "white",
									},
								}}
							/>
							<Button
								variant="contained"
								onClick={sendMessage}
								sx={{
									backgroundColor: "rgba(25, 118, 210, 0.4)",
									color: "white",
									"&:hover": {
										backgroundColor:
											"rgba(21, 101, 192, 0.4)",
									},
									padding: "10px 20px",
									fontSize: "1.2rem",
									boxShadow:
										"0 3px 5px 2px rgba(33, 203, 243, 0.1)",
								}}
							>
								Send
							</Button>
						</Stack>
					</Stack>
				</Box>
			)}
		</>
	);
}
