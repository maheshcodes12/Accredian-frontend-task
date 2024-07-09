import React, { useMemo } from "react";
import { Box, width } from "@mui/system";
import { Button, Typography } from "@mui/material";

const HeroSection = ({ open }) => {
	const component = useMemo(() => {
		return (
			<Box
				display='flex'
				justifyContent={"center"}
				alignContent={"center"}
				mx={"auto"}
				maxWidth={"70%"}
				sx={{
					backgroundColor: "#EEF4FE",
					borderRadius: "md",
					position: "relative",
				}}>
				<img
					style={{
						position: "absolute",
						top: 0,
						left: 30,
					}}
					src='money1.png'
					alt='money'
					width={70}
					height={70}
				/>
				<img
					style={{
						position: "absolute",
						top: 0,
						right: 10,
						transform: `rotate(0deg)`,
					}}
					src='money1.png'
					alt='money'
					width={70}
					height={70}
				/>
				<img
					style={{
						position: "absolute",
						top: 15,
						right: 270,
						zIndex: 0,
						transform: `rotate(90deg)`,
					}}
					src='money2.png'
					alt='money'
					width={70}
					height={70}
				/>
				<img
					style={{
						position: "absolute",
						top: 320,
						right: 400,
						zIndex: 5,
						transform: `rotate(0deg)`,
					}}
					src='money2.png'
					alt='money'
					width={70}
					height={70}
				/>
				<img
					style={{
						position: "absolute",
						top: 160,
						right: 10,
						transform: `rotate(170deg)`,
					}}
					src='money2.png'
					alt='money'
					width={70}
					height={70}
				/>
				<Box
					p={8}
					pr={0}
					display='flex'
					flexDirection='column'
					justifyContent='space-around'>
					<Typography
						fontWeight='bold'
						fontSize='4em'
						lineHeight={1}>
						Let's Learn and Earn
					</Typography>

					<h3>
						Get a chance to win up-to{" "}
						<Typography color='primary'>Rs. 15,000</Typography>
					</h3>
					<Box>
						<Button variant='contained'>Refer Now</Button>
					</Box>
				</Box>

				<Box
					flex
					justifyContent={"center"}
					alignContent={"center"}
					zIndex={2}
					p={1}
					sx={{ width: { xs: "30em", md: "40em" } }}>
					<img
						src='hero.png'
						alt='image'
						style={{ width: "100%", height: "auto" }} // Ensure the image fills its container
					/>
				</Box>
			</Box>
		);
	});
	return <>{component}</>;
};

export default HeroSection;
