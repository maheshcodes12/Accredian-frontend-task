import React, { useMemo, useState, useRef } from "react";
import Header from "../Components/Header";
import {
	Box,
	Typography,
	Tabs,
	Tab,
	Dialog,
	Button,
	DialogContent,
	DialogActions,
} from "@mui/material";
import HeroSection from "../Components/HeroSection";
import HowDoIRefer from "../Components/HowDoIRefer";
import RefferalBenefits from "../Components/RefferalBenefits";
import FAQ from "../Components/FAQ";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";
import ReferPopup from "../Components/ReferPopup";

const LandingPage = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(0);
	const ReferRef = useRef(null);
	const BenefitsRef = useRef(null);
	const FAQRef = useRef(null);
	const SupportRef = useRef(null);
	const handleTabChange = (event, newValue) => {
		setValue(newValue);

		if (newValue === 0) {
			ReferRef.current.scrollIntoView({ behavior: "smooth" });
		} else if (newValue === 1) {
			BenefitsRef.current.scrollIntoView({ behavior: "smooth" });
		} else if (newValue === 2) {
			FAQRef.current.scrollIntoView({ behavior: "smooth" });
		} else if (newValue === 3) {
			SupportRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleToggle = () => {
		console.log("first");
		setOpen(!open);
		console.log(open);
	};

	const tabData = [
		{ label: "Refer", content: "Content for Tab 1" },
		{ label: "Benefits", content: "Content for Tab 2" },
		{ label: "FAQs", content: "Content for Tab 3" },
		{ label: "Support", content: "Content for Tab 3" },
	];

	return (
		<Box
			maxWidth={"100vw"}
			position='relative'>
			<Box
				height={40}
				width='full'
				display='flex'
				justifyContent={"center"}
				gap={1}
				sx={{ backgroundColor: "lightblue" }}
				alignItems='center'>
				Navigate your ideal career path with tailored expert advice {"    "}
				<Typography style={{ color: "blue" }}>Contact Expert</Typography>
			</Box>
			<Header />
			<Box justifyContent='center'>
				<Tabs
					value={value}
					onChange={handleTabChange}
					centered>
					{tabData.map((tab, index) => (
						<Tab
							key={index}
							label={tab.label}
						/>
					))}
				</Tabs>
				<Box sx={{ p: 3 }}>
					<HeroSection handleToggle={handleToggle} />
				</Box>
			</Box>
			<Box ref={ReferRef}>
				<HowDoIRefer handleToggle={handleToggle} />
			</Box>
			<Box ref={BenefitsRef}>
				<RefferalBenefits handleToggle={handleToggle} />
			</Box>
			<Box ref={FAQRef}>
				<FAQ />
			</Box>
			<Box ref={SupportRef}>
				<GetInTouch />
			</Box>
			<Box>
				<Footer />
			</Box>
			<Dialog
				width='100vw'
				height='100vh'
				open={open}
				onClose={handleToggle}
				fullWidth
				maxWidth='md'>
				<DialogContent>
					<ReferPopup />
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleToggle}
						color='primary'>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default LandingPage;
