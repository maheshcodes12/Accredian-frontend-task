import React, { useState } from "react";
import {
	CssBaseline,
	Box,
	List,
	ListItem,
	ListItemText,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	Divider,
	Typography,
} from "@mui/material";

import { data } from "../data/courseData";
import { blue } from "@mui/material/colors";

const RefferalBenefits = ({ handleToggle }) => {
	const [selectedOption, setSelectedOption] = useState(0);

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignContent={"center"}
			mx={"auto"}
			mt={8}
			sx={{ display: "flex", p: 2, maxWidth: "70%" }}>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignContent={"center"}
				mb={4}>
				{" "}
				<Typography
					variant='h6'
					color='black'>
					What Are The <span style={{ color: "blue" }}>Referral Benefits?</span>
				</Typography>
			</Box>
			<Box sx={{ display: "flex", p: 2 }}>
				<Box sx={{ width: 240, mr: 2 }}>
					<List component='nav'>
						{data.map((course, index) => (
							<Box key={index}>
								<ListItem
									sx={{ cursor: "pointer" }}
									key={index}
									onClick={() => setSelectedOption(index)}>
									<ListItemText primary={course.type} />
								</ListItem>
								<Divider />
							</Box>
						))}
					</List>
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<TableContainer component={Paper}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Programs</TableCell>
									<TableCell>Referrer Bonus</TableCell>
									<TableCell>Referee Bonus</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data[selectedOption]?.courses?.map((row, index) => (
									<TableRow key={index}>
										<TableCell>{row.name}</TableCell>
										<TableCell>{row.referrerBonus}</TableCell>
										<TableCell>{row.refereeBonus}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
			<Box
				mt={4}
				display={"flex"}
				justifyContent={"center"}
				alignContent={"center"}>
				<Button
					variant='contained'
					onClick={handleToggle}>
					Refer Now
				</Button>
			</Box>
		</Box>
	);
};

export default RefferalBenefits;
