import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography, Button } from "@mui/material";
// implement those circles
const GetInTouch = () => {
	return (
		<Box
			display={"flex"}
			position={"relative"}
			justifyContent={"space-around"}
			alignContent={"center"}
			mx={"auto"}
			my={8}
			sx={{
				display: "flex",
				px: 4,
				py: 8,
				maxWidth: "70%",
				backgroundColor: "#1A72E9",
				border: "blue",
				borderRadius: "0.5em",
			}}>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignContent={"center"}
				p={2}
				sx={{
					border: "blue",
					borderRadius: "1em",
					borderColor: "#609dea",
					backgroundColor: "white",
				}}>
				<SupportAgentIcon sx={{ fontSize: "3em", color: "blue" }} />
			</Box>
			<Box sx={{ border: "blue", borderRadius: "1em" }}>
				<Typography
					variant='h5'
					color='white'
					mb={2}>
					Want to delve deeper into the program?{" "}
				</Typography>
				<Typography
					variant='body1'
					color='white'>
					Share your details to recieve expert insights from our program team!{" "}
				</Typography>
			</Box>
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignContent={"center"}
				justifyContent={"center"}>
				<Button
					varient='filled'
					endIcon={<ChevronRightIcon />}
					sx={{
						backgroundColor: "white",
						color: "blue",
						"&:hover": { color: "white" },
					}}>
					{" "}
					Get in Touch
				</Button>
			</Box>
		</Box>
	);
};

export default GetInTouch;
