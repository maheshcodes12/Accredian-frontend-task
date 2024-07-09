import { Box, buttonClasses, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const HowDoIRefer = ({ handleToggle }) => {
	return (
		<Box
			py={4}
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginTop: 8,
				backgroundColor: "#eef4fe",
			}}>
			<Typography
				variant='h6'
				color='black'
				mb={6}>
				How Do I <span style={{ color: "blue" }}>Refer</span>
			</Typography>
			<Box position={"relative"}>
				<Box zIndex={0}>
					<img
						width={1100}
						src='circles.png'
						alt=''
					/>
				</Box>

				<PersonAddIcon
					sx={{
						color: "blue",
						fontSize: 60,
						position: "absolute",
						left: 200,
						top: 120,
						zIndex: 10,
					}}></PersonAddIcon>
				<NoteAltIcon
					sx={{
						color: "blue",
						fontSize: 60,
						position: "absolute",
						left: 515,
						top: 120,
						zIndex: 10,
					}}></NoteAltIcon>
				<AccountBalanceWalletIcon
					sx={{
						color: "blue",
						fontSize: 60,
						position: "absolute",
						left: 830,
						top: 120,
						zIndex: 10,
					}}></AccountBalanceWalletIcon>

				<Typography
					variant='body2'
					color='black'
					maxWidth={120}
					sx={{
						position: "absolute",
						left: 180,
						top: 190,
						textAlign: "center",
						zIndex: 10,
					}}>
					Submit referrals easily via our website’s referral section.
				</Typography>
				<Typography
					variant='body2'
					color='black'
					maxWidth={120}
					sx={{
						position: "absolute",
						left: 490,
						top: 190,
						textAlign: "center",
						zIndex: 10,
					}}>
					Earn rewards once your referral joins an Accredian program.
				</Typography>
				<Typography
					variant='body2'
					color='black'
					maxWidth={140}
					sx={{
						position: "absolute",
						left: 790,
						top: 190,
						textAlign: "center",
						zIndex: 10,
					}}>
					Both parties receive a bonus 30 days after program enrollment.
				</Typography>
				<Box
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
		</Box>
	);
};

export default HowDoIRefer;
