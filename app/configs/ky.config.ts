import ky from "ky";

const API_URL = "http://localhost:5000/api/";

export const api = ky.create({
	prefixUrl: API_URL
});
