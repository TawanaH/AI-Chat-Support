import { Button } from "@mui/material";
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
		<>
			{user && (
				<Button
					variant="outlined"
					onClick={handleLogout}
					startIcon={<LogoutIcon />}
					sx={{
						backgroundColor: "rgba(0, 0, 139, 0.9)",

						"&.MuiButton-outlined": {
							borderColor: "black",
							color: "white",
							borderWidth: "0.5px",
						},
						"&.MuiButton-outlined:hover": {
							backgroundColor: "rgba(10, 0, 90, 0.8)",
							borderWidth: "0.5px",
							borderColor: "black",
						},
						"@media (max-width: 600px)": {
							minWidth: 0,
							padding: "8px",
							backgroundColor: "rgba(0, 0, 139, 0.6)",
						},
					}}
				>
					Logout
				</Button>
			)}
		</>
	);
}
