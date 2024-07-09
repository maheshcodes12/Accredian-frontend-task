import React, { useState } from "react";
import {
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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { data } from "../data/FAQs.js";

const FAQ = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedQuestion, setSelectedQuestion] = useState(null);
	const handleQuestionSelect = (index) => {
		setSelectedQuestion(index);
	};

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
					Frequently Asked <span style={{ color: "blue" }}>Questions</span>
				</Typography>
			</Box>
			<Box sx={{ display: "flex", p: 2 }}>
				<Box sx={{ width: 240, mr: 6 }}>
					<List component='nav'>
						{data.map((element, index) => (
							<ListItem
								sx={{
									mb: 2,
									cursor: "pointer",
									borderRadius: "0.5em",
									border:
										selectedOption == index ? "none" : `1px solid #898889`,
									boxShadow:
										selectedOption == index
											? "0px 4px 8px rgba(0, 0, 0, 0.1)"
											: "none",
									color: selectedOption == index ? "blue" : "#898889",
									"&:hover": {
										boxShadow:
											selectedOption == index
												? "0px 4px 8px rgba(0, 0, 0, 0.1)"
												: "0px 4px 8px rgba(0, 0, 0, 0.05)",
									},
								}}
								key={index}
								onClick={() => setSelectedOption(index)}>
								<ListItemText primary={element.type} />
							</ListItem>
						))}
					</List>
				</Box>
				{/* Implement question and answer pair */}
				<Box sx={{ flexGrow: 1 }}>
					{data?.map((element, index) => (
						<Accordion
							key={index}
							sx={{ boxShadow: "none" }}
							onChange={() => handleQuestionSelect(index)}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'>
								<Typography
									variant='body1'
									color={selectedQuestion == index ? "blue" : "black"}>
									{element.question}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									variant='body2'
									color={"black"}>
									{element.answer}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default FAQ;
