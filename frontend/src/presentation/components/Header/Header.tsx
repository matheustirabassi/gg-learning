import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Tooltip, Avatar } from "@mui/material";
import { ReactComponent as LogoIcn } from "assets/icons/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import { ROUTES } from 'Routes';
import { useAuthContext } from "presentation/contexts/AuthContext";

interface IHeaderProps {
	children: React.ReactNode
}

/** Menu superior*/
export const Header: React.FC<IHeaderProps> = ({ children }) => {
	const { logout } = useAuthContext()

	//Nome da página, caminho da página
	type Pages = [string, string]
	const pages: Pages[] = [
		["Artigos", ROUTES.ALLARTICLES],
	]

	/** Observa o elemento ancorado */
	const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

	/** Ao clicar, deve exibir o menu  */
	const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElMenu(event.currentTarget)
	}
	const handleClickUser = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	/** Ao clicar, fecha o menu principal */
	const handleCloseUser = () => {
		setAnchorElUser(null)
	}
	const handleCloseMenu = () => {
		setAnchorElMenu(null)
	}

	return (
		<>
			<Box>
				<AppBar position="static" sx={{backgroundColor: "primary.main"}}>
					<Box padding={1}>
						<Toolbar disableGutters>
							<Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }} >
								<LogoIcn />
							</Box>
							<Typography
								variant="h4"
								noWrap
								component="a"
								href="/"
								sx={{
									mr: 2,
									display: { xs: 'none', md: 'flex' },
									fontWeight: 700,
									color: 'secondary.contrastText',
									textDecoration: 'none',
								}}
							>
								GGLearning
							</Typography>

							<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
								<IconButton
									size="large"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleClickMenu}
									color="secondary"
								>
									<MenuIcon />
								</IconButton>
								<Menu
									color='white'
									id="menu-appbar"
									anchorEl={anchorElMenu}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'left',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'left',
									}}
									open={Boolean(anchorElMenu)}
									onClose={handleCloseMenu}
									sx={{
										display: { xs: 'block', md: 'none' },

									}}
								>
									{pages.map((page) => (
										<MenuItem key={page[0]} onClick={handleCloseMenu} href={page[1]}>
											<Button href={page[1]}>
												<Typography textAlign="center" variant='h5'>{page[0]}</Typography>
											</Button>
										</MenuItem>
									))}
								</Menu>
							</Box>

							<Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
								<LogoIcn />
							</Box>

							<Typography
								variant="h5"
								noWrap
								component="a"
								href="/"
								sx={{
									mr: 2,
									display: { xs: 'flex', md: 'none' },
									flexGrow: 1,
									fontWeight: 700,
									color: 'secondary.contrastText',
									textDecoration: 'none',
								}}
							>
								GGLearning
							</Typography>
							<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
								{pages.map((page) => (
									<Button
										key={page[0]}
										onClick={handleCloseMenu}
										href={page[1]}
										sx={{ my: 2, color: 'secondary.contrastText', display: 'block', fontWeight: 400, fontSize: "16px" }}>
										{page[0]}
									</Button>
								))}
							</Box>

							<Box sx={{ flexGrow: 0 }}>
								<Tooltip title="Open settings">
									<IconButton
										onClick={handleClickUser}
										sx={{ p: 0 }}>
										<Avatar alt="Remy Sharp" src="../../../assets/icons/user.svg" />
									</IconButton>
								</Tooltip>
								<Menu
									sx={{ mt: '45px' }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUser}
								>
									<MenuItem >
										<Button sx={{ textTransform: "none" }} href="/myaccount" onClick={handleCloseUser}>
											<Typography textAlign="center" variant='h5'>Minha conta</Typography>
										</Button>
									</MenuItem>
									<MenuItem >
										<Button sx={{ textTransform: "none" }} href="/" onClick={logout}>
											<Typography textAlign="center" variant='h5'>Sair</Typography>
										</Button>
									</MenuItem>
								</Menu>
							</Box>
						</Toolbar>
					</Box>
				</AppBar>
			</Box>
			<Box>
				{children}
			</Box>
		</>
	)
}