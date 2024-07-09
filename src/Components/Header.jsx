import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Refer & earn", "Resources", "About Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [course, setCourse] = React.useState("React");
	const [isLogin, setIslogin] = React.useState(false);

	React.useEffect(() => {
		const loggedin = localStorage.getItem("token");
		if (loggedin) setIslogin(true);
	});

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position='static'
			sx={{
				maxWidth: "70%",
				boxShadow: "none",
				mx: "auto",
			}}>
			<Container
				maxWidth='xl'
				sx={{
					color: "black",
					backgroundColor: "white",
				}}>
				<Toolbar disableGutters>
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
						}}>
						<img
							src='logo.png'
							alt='Logo'
							width={100}
						/>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='black'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}>
									<Typography
										textAlign='center'
										color='black'>
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
						}}>
						<img
							src='logo.png'
							alt='Logo'
							width={100}
						/>
					</Box>
					{/* //---------------------------------------------------------------------------------------------Make text color black */}
					<Box
						sx={{
							flexGrow: 1,
							mx: 4,
							maxWidth: 180,
							height: 30,
							display: { xs: "none", md: "flex" },
						}}>
						<Select
							fullWidth
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={course}
							onChange={(e) => {
								setCourse(e.target.value);
							}}
							defaultValue='Course'
							sx={{
								color: "black",
							}}>
							<MenuItem value={"Material UI"}>Material UI</MenuItem>
							<MenuItem value={"React"}>React</MenuItem>
							<MenuItem value={"Node.js"}>Node.js</MenuItem>
						</Select>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
							mr: 4,
						}}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "black", display: "block" }}>
								{page}
							</Button>
						))}
					</Box>
					{!isLogin && (
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								justifyContent: "flex-end",
								mr: 4,
							}}>
							<Link to='/login'>
								<Button>Login</Button>
							</Link>
						</Box>
					)}
					{isLogin && (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{ p: 0 }}>
									<Avatar
										alt='Remy Sharp'
										src='/static/images/avatar/2.jpg'
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								{settings.map((setting) => (
									<MenuItem
										key={setting}
										onClick={handleCloseUserMenu}>
										<Typography textAlign='center'>{setting}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;
