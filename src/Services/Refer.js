import axios from "axios";
// import { notifications } from "@mantine/notifications";

const backend_url = import.meta.env.VITE_BACKEND_URI;

export const referApi = async (code) => {
	const email = localStorage.getItem("email");
	try {
		const response = await axios.post(`${backend_url}/refer`, {
			id_of_referrer: code,
			email: email,
		});

		if (response.data.success) {
			console.log(response);
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.log(error);
	}
};

export const getReferalDataApi = async () => {
	try {
		const response = await axios.get(`${backend_url}/refer/getreferals`, {
			params: {
				email: email,
			},
		});

		if (response.data.success) {
			console.log(response);
			return true;
		}

		return false;
	} catch (error) {
		console.log(error);
	}
};
