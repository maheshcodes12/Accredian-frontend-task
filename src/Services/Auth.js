import axios from "axios";
// import { notifications } from "@mantine/notifications";

const backend_url = import.meta.env.VITE_BACKEND_URI;

export const signupApi = async (name, email, password) => {
	try {
		const response = await axios.post(`${backend_url}/auth/signup`, {
			name: name,
			email: email,
			password: password,
		});

		if (response.data.success) {
			console.log(response);
			await loginApi(email, password);
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.log(error);
	}
};

export const loginApi = async (email, password) => {
	try {
		const response = await axios.post(`${backend_url}/auth/login`, {
			email: email,
			password: password,
		});

		if (response.data?.success) {
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("email", response.data.email);
			return true;
		}

		return false;
	} catch (error) {
		console.log(error);
	}
};
