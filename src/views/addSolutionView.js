import {createSolution} from '../api/solutionsApi.js';
import {render, html} from '../lib/lit-html.js';
import page from '../lib/page.js';

const template = onSubmit => html`
	<section id="create">
		<div class="form">
			<img class="border" src="./images/border.png" alt="" />
			<h2>Add Solution</h2>
			<form @submit=${onSubmit} class="create-form">
				<input type="text" name="type" id="type" placeholder="Solution Type" />
				<input type="text" name="image-url" id="image-url" placeholder="image-url" />
				<textarea
					id="description"
					name="description"
					placeholder="Description"
					rows="2"
					cols="10"></textarea>
				<textarea
					id="more-info"
					name="more-info"
					placeholder="more Info"
					rows="2"
					cols="10"></textarea>
				<button type="submit">Add Solution</button>
			</form>
		</div>
	</section>
`;

export default function addSolutionView() {
	render(template(createSubmitHandler));
}

async function createSubmitHandler(e) {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);
	const data = Object.fromEntries(formData);

	if (!Object.values(data).every(value => !!value)) {
		return alert('All fields are required!');
	}

	try {
		await createSolution(data);
		page.redirect('/solutions');
	} catch (err) {
		alert(err.message);
	}
}
