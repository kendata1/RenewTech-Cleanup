import {login} from '../api/userApi.js';
import {render, html} from '../lib/lit-html.js';
import page from '../lib/page.js';
import {saveUserData} from '../utils/userUtils.js';

const template = onSubmit => html`
	<section id="login">
		<div class="form">
			<img class="border" src="./images/border.png" alt="" />
			<h2>Login</h2>
			<form @submit=${onSubmit} class="login-form">
				<input type="text" name="email" id="email" placeholder="email" />
				<input type="password" name="password" id="password" placeholder="password" />
				<button type="submit">login</button>
				<p class="message">
					Not registered? <a href="/register">Create an account</a>
				</p>
			</form>
		</div>
	</section>
`;

export default function loginView() {
	render(template(loginSubmitHandler));
}

async function loginSubmitHandler(e) {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);
	const email = formData.get('email');
	const password = formData.get('password');

	if (email == '' || password == '') {
		return alert('All fields are required!');
	}

	try {
		const userData = await login({email, password});
		saveUserData(userData);
		page.redirect('/');
	} catch (err) {
		alert(err.message);
	}
}
