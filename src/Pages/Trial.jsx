import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Box,
} from "@mui/material";

const Trial = () => {
	const [open, setOpen] = useState(false);
	const [formValues, setFormValues] = useState({ name: "", email: "" });
	const [errors, setErrors] = useState({ name: "", email: "" });

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });

		// Basic validation
		if (name === "name" && value.trim() === "") {
			setErrors({ ...errors, [name]: "Name is required" });
		} else if (
			name === "email" &&
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
		) {
			setErrors({ ...errors, [name]: "Invalid email address" });
		} else {
			setErrors({ ...errors, [name]: "" });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errors.name && !errors.email) {
			console.log("Form Submitted", formValues);
			handleClose();
		} else {
			console.log("Form has errors");
		}
	};

	return (
		<Box>
			<Button
				variant='contained'
				color='primary'
				onClick={handleClickOpen}>
				Open Form
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}>
				<DialogTitle>Fill your details</DialogTitle>
				<DialogContent>
					<form
						noValidate
						autoComplete='off'
						onSubmit={handleSubmit}>
						<TextField
							autoFocus
							margin='dense'
							name='name'
							label='Name'
							type='text'
							fullWidth
							value={formValues.name}
							onChange={handleChange}
							error={!!errors.name}
							helperText={errors.name}
						/>
						<TextField
							margin='dense'
							name='email'
							label='Email Address'
							type='email'
							fullWidth
							value={formValues.email}
							onChange={handleChange}
							error={!!errors.email}
							helperText={errors.email}
						/>
						<DialogActions>
							<Button
								onClick={handleClose}
								color='primary'>
								Cancel
							</Button>
							<Button
								type='submit'
								color='primary'>
								Submit
							</Button>
						</DialogActions>
					</form>
				</DialogContent>
			</Dialog>
		</Box>
	);
};

export default Trial;
