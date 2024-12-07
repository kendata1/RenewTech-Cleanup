import {editSolution, getOneSolution} from '../api/solutionsApi.js';
import {html, render} from '../lib/lit-html.js';
import page from '../lib/page.js';

const template = (onSubmit, solution) => html`
	<!-- Edit Page (Only for logged-in users) -->
	<section id="edit">
		<div class="form">
			<img class="border" src="./images/border.png" alt="" />
			<h2>Edit Solution</h2>
			<form @submit=${onSubmit} class="edit-form">
				<input
					type="text"
					name="type"
					id="type"
					placeholder="Solution Type"
					value=${solution.type} />
				<input
					type="text"
					name="image-url"
					id="image-url"
					placeholder="Image URL"
					value=${solution.imageUrl} />
				<textarea
					id="description"
					name="description"
					placeholder="Description"
					rows="2"
					cols="10">
${solution.description}</textarea
				>
				<textarea
					id="more-info"
					name="more-info"
					placeholder="more Info"
					rows="2"
					cols="10">
${solution.learnMore}</textarea
				>
				<button type="submit">Edit</button>
			</form>
		</div>
	</section>
`;

export default async function editView(ctx) {
	const solution = await getOneSolution(ctx.params.id);
	render(template(editSubmitHandler.bind(ctx), solution));
}

async function editSubmitHandler(e) {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);
	const data = Object.fromEntries(formData);

	if (!Object.values(data).every(value => !!value)) {
		return alert('All fields are required!');
	}

	try {
		const id = this.params.id;
		await editSolution(id, data);
		page.redirect(`/solutions/${id}`);
	} catch (err) {
		alert(err.message);
	}
}
