import axios from "axios";

export const ENDPOINT_BASE_URL = "http://ptgccs-env-1.eba-8y4zsafa.us-east-2.elasticbeanstalk.com/api";

export default axios.create({
	baseURL: ENDPOINT_BASE_URL,
});