import React, { useState } from "react";
import {
	TextField,
	Button,
	Box,
	Typography,
	Link,
	FormControlLabel,
	Switch,
} from "@mui/material";
import { Link as LinkRRD } from "react-router-dom";
import { loginApi, signupApi } from "../Services/Auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
	const [formData, setFormData] = useState({
		email: "",
		name: "",
		password: "",
	});

	const navigate = useNavigate();
	const [formErrors, setFormErrors] = useState({
		email: "",
		name: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let errors = {};
		if (!formData.email) {
			errors.email = "Email is required";
		}
		if (!formData.name && !isLogin) {
			errors.name = "Name is required";
		}
		if (!formData.password) {
			errors.password = "Password is required";
		}
		setFormErrors(errors);

		if (Object.keys(errors).length === 0) {
			if (isLogin) {
				await loginApi(formData.email, formData.password).then(() => {
					navigate("/");
				});
			} else {
				await signupApi(formData.name, formData.email, formData.password).then(
					() => {
						navigate("/");
					}
				);
			}
		}
	};

	return (
		<Box
			sx={{
				maxWidth: 400,
				mx: "auto",
				mt: 8,
				p: 3,
				border: "1px solid #ccc",
				borderRadius: 5,
			}}>
			<Typography
				variant='h5'
				gutterBottom>
				{isLogin ? "Login" : "Sign Up"}
			</Typography>
			<form onSubmit={handleSubmit}>
				{!isLogin && (
					<TextField
						fullWidth
						margin='normal'
						label='name'
						variant='outlined'
						name='name'
						value={formData.name}
						onChange={handleInputChange}
						error={!!formErrors.name}
						helperText={formErrors.name}
					/>
				)}
				<TextField
					fullWidth
					margin='normal'
					label='Email'
					variant='outlined'
					name='email'
					value={formData.email}
					onChange={handleInputChange}
					error={!!formErrors.email}
					helperText={formErrors.email}
				/>
				<TextField
					fullWidth
					margin='normal'
					label='Password'
					variant='outlined'
					type='password'
					name='password'
					value={formData.password}
					onChange={handleInputChange}
					error={!!formErrors.password}
					helperText={formErrors.password}
				/>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					fullWidth
					sx={{ mt: 2 }}>
					{isLogin ? "Login" : "Sign Up"}
				</Button>
			</form>
			<Box sx={{ mt: 2 }}>
				<FormControlLabel
					control={
						<Switch
							checked={isLogin}
							onChange={() => setIsLogin(!isLogin)}
						/>
					}
					label={
						isLogin
							? "Don't have an account? Sign Up"
							: "Already have an account? Login"
					}
				/>
			</Box>
			<Box sx={{ mt: 2 }}>
				<LinkRRD to='/'>Back to Home</LinkRRD>
			</Box>
		</Box>
	);
};

export default LoginForm;
