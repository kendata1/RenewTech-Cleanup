export const saveUserData = userData => {
	localStorage.setItem('_id', userData._id);
	localStorage.setItem('email', userData.email);
	localStorage.setItem('accessToken', userData.accessToken);
};

export const getUserData = () => {
	const userData = {
		_id: localStorage.getItem('_id'),
		email: localStorage.getItem('email'),
		accessToken: localStorage.getItem('accessToken'),
	};
	return userData;
};

export const deleteUserData = () => {
	localStorage.removeItem('_id');
	localStorage.removeItem('email');
	localStorage.removeItem('accessToken');
};
