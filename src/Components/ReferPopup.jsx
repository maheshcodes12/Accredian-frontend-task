import React, { useEffect, useState } from "react";
import {
	TextField,
	Button,
	IconButton,
	Snackbar,
	Tooltip,
	Box,
	Typography,
	Link,
	FormControlLabel,
	Switch,
} from "@mui/material";
import {
	FileCopyOutlined as FileCopyOutlinedIcon,
	Flare,
} from "@mui/icons-material";
import { Link as LinkRRD } from "react-router-dom";
import { loginApi, signupApi } from "../Services/Auth";
import { getReferalDataApi, referApi } from "../Services/Refer";
import { useNavigate } from "react-router-dom";

const ReferPopup = ({ handleToggle }) => {
	const [openSnackbar, setOpenSnackbar] = React.useState(false);
	const [openTextField, setOpenTextField] = React.useState(false);
	const [openHistory, setOpenHistory] = React.useState(false);
	const [code, setCode] = useState();
	const [referrer, setReferrer] = useState();
	const [refdata, setRefData] = useState();
	const navigate = useNavigate();

	const handleCopyClick = () => {
		navigator.clipboard.writeText(code);
		setOpenSnackbar(true);
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	useEffect(() => {
		const ref = localStorage.getItem("id");
		setCode(ref);
	}, []);
	useEffect(() => {
		async function getDAta() {
			const data = await getReferalDataApi();
			setRefData(data);
		}
		getDAta();
	}, [openHistory]);

	const handleSubmit = async () => {
		await referApi(referrer);
		handleToggle();
	};

	return (
		<Box
			sx={{
				mx: "auto",
				my: 4,
			}}>
			<Typography
				variant='h5'
				textAlign={"center"}
				mx={"auto"}
				gutterBottom>
				Refer & Earn
			</Typography>

			<Box>
				<Box
					mt={4}
					display={"flex"}
					justifyContent={"center"}
					alignContent={"center"}>
					<Typography
						variant='h6'
						color='black'
						pr={2}>
						Your Referal Code :
					</Typography>
					<Typography
						variant='body1'
						color='black'
						pr={2}
						pt={0.6}
						display={"flex"}
						alignContent='middle'>
						{code}
					</Typography>

					<Tooltip title='Copy to Clipboard'>
						<IconButton onClick={handleCopyClick}>
							<FileCopyOutlinedIcon sx={{ fontSize: 20 }} />
						</IconButton>
					</Tooltip>
				</Box>
				<Box
					mt={4}
					gap={4}
					display={"flex"}
					justifyContent={"center"}
					alignContent={"center"}>
					<Button onClick={() => setOpenTextField(!openTextField)}>
						Verify Referal
					</Button>
					<Button onClick={() => setOpenHistory(!openHistory)}>History</Button>
				</Box>
				{openTextField && (
					<>
						<Box
							mt={4}
							gap={4}
							display={"flex"}
							justifyContent={"center"}
							alignContent={"center"}>
							<TextField
								id='filled-basic'
								label='Enter referrer code'
								variant='filled'
								onChange={(e) => setReferrer(e.target.value)}
							/>
						</Box>
						<Box
							mx='auto'
							mt={2}
							display={"flex"}
							justifyContent={"center"}>
							<Button onClick={handleSubmit}>Submit</Button>
						</Box>
					</>
				)}
				{openHistory && (
					<Box
						mt={4}
						gap={4}
						display={"flex"}
						justifyContent={"center"}
						alignContent={"center"}>
						<Typography
							variant='body1'
							color='black'>
							Your Referrer : {refdata.referedFrom}
						</Typography>
						<Typography
							variant='body1'
							color='black'>
							Your have referred :{" "}
							{refdata.referedTo.map((element, index) => {
								<Typography
									variant='body1'
									color='black'>
									{element + "," + " "}
								</Typography>;
							})}
						</Typography>
					</Box>
				)}

				<Snackbar
					open={openSnackbar}
					autoHideDuration={2000}
					onClose={handleCloseSnackbar}
					message='Copied to clipboard!'
				/>
			</Box>
		</Box>
	);
};

export default ReferPopup;
