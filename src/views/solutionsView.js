import {getAllSolutions} from '../api/solutionsApi.js';
import {html, render} from '../lib/lit-html.js';

const template = solutions => html`
	<h2>Solutions</h2>
	<section id="solutions">
		${solutions.map(
			solution => html` <div class="solution">
				<img src=${solution.imageUrl} alt="example1" />
				<div class="solution-info">
					<h3 class="type">${solution.type}</h3>
					<p class="description">${solution.description}</p>
					<a class="details-btn" href=${`/solutions/${solution._id}`}>Learn More</a>
				</div>
			</div>`
		)}
	</section>
	${solutions.length === 0 ? html`<h2 id="no-solution">No Solutions Added.</h2>` : ''}
`;

export default async function solutionsView() {
	try {
		const solutions = await getAllSolutions();
		render(template(solutions));
	} catch (error) {
		alert(error.message);
	}
}
