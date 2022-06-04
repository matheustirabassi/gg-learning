import { AccountCircle, Menu } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function HomeHeaderView() {
	return (
		<div className="Header">
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<Menu />
					</IconButton>
					<Typography variant="h5">GGLearning</Typography>
					<IconButton edge="end" color="inherit" aria-label="menu">
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
export default HomeHeaderView;
