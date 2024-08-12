import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import LogoutButton from "./LogoutButton";

export default function Header({ loggedIn }) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				sx={{
					backgroundColor: "transparent",
					color: "black",
					backgroundImage: "url('/background.jpg')",
				}}
				position="sticky"
			>
				<Toolbar>
					<Typography
						variant="h6"
						sx={{
							fontWeight: "bold",
							color: "#FFF",
							marginRight: "auto",
							fontSize: "1.25rem",
							letterSpacing: "0.05em",
							paddingRight: "20px",
						}}
					>
						EchoGPT
					</Typography>
					<LogoutButton />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
