import { AppBar, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { ReactComponent as ArticleIcn } from "assets/icons/article.svg"
import { ReactComponent as CodeIcn } from "assets/icons/code.svg"
import { ReactComponent as MenuIcn } from "assets/icons/logo.svg"
import { ReactComponent as UserIcn } from "assets/icons/user.svg"
import { useState } from "react"

/** A tela de cabeçalho do GGLearning */
function HomeHeaderView() {
	/** Observa o elemento ancorado */
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	/** Booleano que indica o status de exibição do menu */
	const open = Boolean(anchorEl)

	/** Ao clicar, deve exibe o menu  */
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	/** Ao clicar, fecha o menu principal */
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<AppBar position="relative" color="transparent">
			<Toolbar disableGutters>
				<Grid container padding="20px" justifyContent="space-between">
					<Grid xs={4} sx={{ display: { xs: "flex" } }} alignItems="center" item>
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
							sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
							paddingLeft={"8px"}
						>
							GGLearning
						</Typography>
					</Grid>
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
						<MenuItem onClick={handleClose}>
							<Typography variant="h4" color="secondary">
								Artigos
							</Typography>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Typography variant="h4" color="secondary">
								Compilador
							</Typography>
						</MenuItem>
					</Menu>
					<Grid xs={2} sx={{ display: { md: "flex", xs: "none" } }} alignItems="center">
						<IconButton>
							<ArticleIcn />
						</IconButton>

						<Typography color="secondary" variant="h4" paddingLeft={"8px"}>
							Artigos
						</Typography>
					</Grid>
					<Grid xs={2} sx={{ display: { md: "flex", xs: "none" } }} alignItems="center">
						<IconButton size="large" aria-label="artigos">
							<CodeIcn />
						</IconButton>
						<Typography color="secondary" variant="h4" paddingLeft={"8px"}>
							Compilador
						</Typography>
					</Grid>
					<Grid
						xs={4}
						sx={{ display: { xs: "flex", flexGrow: "2" } }}
						justifyContent="flex-end"
						alignItems="center"
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
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default HomeHeaderView
