import { AppBar, Toolbar, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export default function LogoutButton() {
	const [user] = useAuth();
	const router = useRouter();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			router.push("/auth/login");
		} catch (error) {
			console.error("Failed to log out:", error);
		}
	};

	return (
		<AppBar
			position="static"
			sx={{ boxShadow: "none", backgroundColor: "transparent" }}
		>
			<Toolbar sx={{ justifyContent: "flex-end" }}>
				{user && (
					<Button
						variant="outlined"
						color="inherit"
						onClick={handleLogout}
						startIcon={<LogoutIcon />}
						sx={{
							"@media (max-width: 600px)": {
								minWidth: 0,
								padding: "8px",
							},
						}}
					>
						Logout
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
}
