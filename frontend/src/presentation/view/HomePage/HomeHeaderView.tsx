import {
	AppBar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material"
import { ReactComponent as ArticleIcn } from "assets/icons/article.svg"
import { ReactComponent as CodeIcn } from "assets/icons/code.svg"
import { ReactComponent as MenuIcn } from "assets/icons/logo.svg"
import { ReactComponent as UserIcn } from "assets/icons/user.svg"
import { useState } from "react"

function HomeHeaderView() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<AppBar position="relative" color="transparent">
			<Container maxWidth="xl">
				<Box padding="20px">
					<Toolbar disableGutters>
						<IconButton
							size="large"
							aria-label="menu"
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
							<MenuIcn />
						</IconButton>
						<Typography
							color="secondary"
							variant="h4"
							sx={{ flexGrow: 2, display: { xs: "none", md: "flex" }, mr: 1 }}
							paddingLeft={"8px"}
						>
							GGLearning
						</Typography>

						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
							sx={{ display: { md: "none", xs: "flex" } }}
						>
							<MenuItem onClick={handleClose}>Artigos</MenuItem>
							<MenuItem onClick={handleClose}>Compilador</MenuItem>
						</Menu>
						<Box sx={{ flexGrow: 1, display: { md: "flex", xs: "none" } }} alignItems="center">
							<IconButton>
								<ArticleIcn />
							</IconButton>

							<Typography color="secondary" variant="h4" sx={{ flexGrow: 1 }} paddingLeft={"8px"}>
								Artigos
							</Typography>
						</Box>
						<Box sx={{ flexGrow: 2, display: { md: "flex", xs: "none" } }} alignItems="center">
							<IconButton size="large" aria-label="artigos">
								<CodeIcn />
							</IconButton>
							<Typography color="secondary" variant="h4" sx={{ flexGrow: 2 }} paddingLeft={"8px"}>
								Compilador
							</Typography>
						</Box>
						<Box
							sx={{ flexGrow: 1, display: { xs: "flex" } }}
							justifyContent="flex-end"
							alignItems="center"
							textAlign="end"
						>
							<IconButton size="large" aria-label="artigos">
								<UserIcn />
							</IconButton>
							<Typography
								color="secondary"
								variant="h4"
								sx={{ display: { md: "flex", xs: "none" } }}
								paddingLeft={"8px"}
							>
								Minha conta
							</Typography>
						</Box>
					</Toolbar>
				</Box>
			</Container>
		</AppBar>
	)
}
export default HomeHeaderView
