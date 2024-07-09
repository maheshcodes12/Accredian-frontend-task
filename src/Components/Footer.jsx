import React from "react";
import {
	Box,
	Button,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Programs = [
	"Data Science and AI",
	"Product Management",
	"Business Analytics",
	"Digital Transformation",
	"Business Management",
	"Product Management",
	"Strategy and Leadership",
	"Senior Management",
	"Fintech",
];

const Footer = () => {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignContent={"center"}
			mx={"auto"}
			mt={6}
			sx={{
				display: "flex",
				px: "20%",
				py: 6,
				backgroundColor: "#292829",
			}}>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignContent={"center"}
				width={"100%"}>
				<img
					src='logoWhite.png'
					alt='logo'
					width={150}
				/>

				<Box>
					<Button
						varient='filled'
						sx={{ backgroundColor: "blue", color: "white" }}>
						Schedule 1-on-1 call now
					</Button>
					<Typography
						variant='body2'
						color='white'
						textAlign={"center"}>
						Speak with our learning advisor
					</Typography>
				</Box>
			</Box>
			<Divider sx={{ backgroundColor: "white", mt: 2 }} />
			<Box
				display={"flex"}
				gap={4}
				justifyContent={"space-between"}
				alignContent={"center"}
				mx={"auto"}
				mt={1}
				sx={{
					color: "white",
					py: 4,
					backgroundColor: "#292829",
				}}>
				<Box>
					<Typography
						variant='body1'
						pl={2}>
						Programs
					</Typography>
					<List
						component='nav'
						sx={{ p: 0 }}>
						{Programs.map((element, index) => (
							<ListItem key={index}>
								<ListItemText primary={element} />
								<ListItemSecondaryAction>
									<AddIcon sx={{ color: "white", fontSize: "1em" }} />
								</ListItemSecondaryAction>
							</ListItem>
						))}
					</List>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					gap={2}>
					<Typography variant='body1'>Contact Us</Typography>
					<Typography variant='body2'>
						Email us (For Data Science Queries): admissions@accredian.com
					</Typography>
					<Typography variant='body2'>
						Email us (For Data Science Queries): admissions@accredian.com
					</Typography>
					<Typography variant='body2'>
						Email us (For Product Management Queries):pm@accredian.com
					</Typography>
					<Typography variant='body2'>
						Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
					</Typography>
					<Typography variant='body2'>
						Product Management Admission Helpline:+91 9625811095
					</Typography>
					<Typography variant='body2'>
						Enrolled Student Helpline: +91 7969322507
					</Typography>
					<Typography variant='body2'>
						Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
						Gurugram, Haryana 122015
					</Typography>
					<a
						href='https://accredian.com/whyaccredian'
						target='_blanck'
						style={{ color: "white" }}>
						Why Accredian
					</a>
					<Typography
						variant='body1'
						color='white'>
						Follow US
					</Typography>
					<Box
						display={"flex"}
						gap={2}>
						<FacebookIcon />
						<LinkedInIcon />
						<XIcon />
						<InstagramIcon />
						<YouTubeIcon />
					</Box>
				</Box>
				<Box>
					<Typography variant='body1'>Accredian</Typography>
					<Typography variant='body2'>About</Typography>
					<Typography variant='body2'>Career</Typography>
					<Typography variant='body2'>Blog</Typography>
					<Typography variant='body2'>Admission Policy</Typography>
					<Typography variant='body2'>Referral Policy</Typography>
					<Typography variant='body2'>Privacy Policy</Typography>
					<Typography variant='body2'>Terms Of Service</Typography>
					<Typography variant='body2'>Master FAQs</Typography>
				</Box>
			</Box>
			<Box
				textAlign={"center"}
				color={"white"}>
				© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
				Reserved
			</Box>
		</Box>
	);
};

export default Footer;
