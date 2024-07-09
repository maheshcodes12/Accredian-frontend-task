import React, { useMemo, useState, useRef } from "react";
import Header from "../Components/Header";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import HeroSection from "../Components/HeroSection";
import HowDoIRefer from "../Components/HowDoIRefer";
import RefferalBenefits from "../Components/RefferalBenefits";
import FAQ from "../Components/FAQ";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";

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

	const tabData = [
		{ label: "Refer", content: "Content for Tab 1" },
		{ label: "Benefits", content: "Content for Tab 2" },
		{ label: "FAQs", content: "Content for Tab 3" },
		{ label: "Support", content: "Content for Tab 3" },
	];

	const heroSection = useMemo(() => {
		return (
			<HeroSection
				value={value}
				open={open}
			/>
		);
	}, [value]);

	return (
		<Box maxWidth={"100vw"}>
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
				<Box sx={{ p: 3 }}>{heroSection}</Box>
			</Box>
			<Box ref={ReferRef}>
				<HowDoIRefer open={open} />
			</Box>
			<Box ref={BenefitsRef}>
				<RefferalBenefits open={open} />
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
		</Box>
	);
};

export default LandingPage;
