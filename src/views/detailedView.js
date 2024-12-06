import {getOneSolution} from '../api/solutionsApi.js';
import {html, render} from '../lib/lit-html.js';
import {getUserData} from '../utils/userUtils.js';

const template = (solution, userId) => html`
	<section id="details">
		<div id="details-wrapper">
			<img id="details-img" src=${solution.imageSrc} alt="example1" />
			<div>
				<p id="details-type">${solution.type}</p>
				<div id="info-wrapper">
					<div id="details-description">
						<p id="description">${solution.description}</p>
						<p id="more-info">${solution.learnMore}</p>
					</div>
				</div>
				<h3>Like Solution:<span id="like">0</span></h3>

				<div id="action-buttons">
					${userId === solution._ownerId
						? html`<a href=${`/solutions/${solution._id}/edit`} id="edit-btn"
									>Edit</a
								>
								<a href=${`/solutions/${solution._id}/delete`} id="delete-btn"
									>Delete</a
								>`
						: ''}
					${!!userId && userId !== solution._ownerId
						? html`<a href="#" id="like-btn">Like</a>`
						: ''}
				</div>
			</div>
		</div>
	</section>
`;

export default async function detailedView(ctx) {
	const {_id} = getUserData();

	try {
		const solution = await getOneSolution(ctx.params.id);
		render(template(solution, _id));
	} catch (err) {
		alert(err.message);
	}
}
