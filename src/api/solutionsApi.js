import {request} from '../lib/requester.js';

const baseUrl = 'http://localhost:3030/data/solutions';

export const getAllSolutions = () => {
	return request('GET', `${baseUrl}?sortBy=_createdOn%20desc`);
};

export const getOneSolution = id => {
	return request('GET', `${baseUrl}/${id}`);
};

export const createSolution = data => {
	return request('POST', baseUrl, data);
};
