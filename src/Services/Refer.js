import axios from "axios";

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
	const email = localStorage.getItem("email");
	try {
		const response = await axios.get(`${backend_url}/refer/getreferals`, {
			params: {
				email: email,
			},
		});

		if (response.data?.success) {
			return response.data.data;
		}

		return false;
	} catch (error) {
		console.log(error);
	}
};
