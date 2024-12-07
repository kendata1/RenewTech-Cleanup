import {request} from '../lib/requester.js';
const baseUrl = 'http://localhost:3030/data/likes';

export const like = data => {
	return request('POST', baseUrl, data);
};

export const getLikes = id => {
	return request(
		'GET',
		`${baseUrl}?where=solutionId%3D%22${id}%22&distinct=_ownerId&count`
	);
};

export const haveUserLiked = (userId, id) => {
	return request(
		'GET',
		`${baseUrl}?where=solutionId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`
	);
};
