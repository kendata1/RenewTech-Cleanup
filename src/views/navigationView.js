import {logout} from '../api/userApi.js';
import {baseRender, html} from '../lib/lit-html.js';
import page from '../lib/page.js';
import {deleteUserData, getUserData} from '../utils/userUtils.js';

const headerElement = document.querySelector('#wrapper header');

const template = (onLogout, isLogged) => html`
	<a id="logo" href="/"><img id="logo-img" src="./images/logo2.png" alt="logo" /> </a>
	<nav>
		<div>
			<a href="/solutions">Solutions</a>
		</div>

		${isLogged
			? html` <div class="user">
					<a href="/solutions/add">Add Solution</a>
					<a @click=${onLogout} href="">Logout</a>
			  </div>`
			: html` <div class="guest">
					<a href="/login">Login</a>
					<a href="/register">Register</a>
			  </div>`}
	</nav>
`;

export default function navigationView() {
	const userData = getUserData();
	const isLoggedIn = !!userData.accessToken;
	baseRender(template(logoutHandler, isLoggedIn), headerElement);
}

async function logoutHandler() {
	try {
		await logout();
		deleteUserData();
		page.redirect('/');
	} catch (err) {
		alert(err.message);
	}
}
