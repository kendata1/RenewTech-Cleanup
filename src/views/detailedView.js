import {getLikes, haveUserLiked, like} from '../api/likesApi.js';
import {getOneSolution} from '../api/solutionsApi.js';
import {html, render} from '../lib/lit-html.js';
import {getUserData} from '../utils/userUtils.js';

const template = (solution, userId, onLikeClick, likes, isLikedByCurrentUser) => html`
	<section id="details">
		<div id="details-wrapper">
			<img id="details-img" src=${solution.imageUrl} alt="example1" />
			<div>
				<p id="details-type">${solution.type}</p>
				<div id="info-wrapper">
					<div id="details-description">
						<p id="description">${solution.description}</p>
						<p id="more-info">${solution.learnMore}</p>
					</div>
				</div>
				<h3>Like Solution:<span id="like">${likes}</span></h3>

				<div id="action-buttons">
					${userId === solution._ownerId
						? html`<a href=${`/solutions/${solution._id}/edit`} id="edit-btn"
									>Edit</a
								>
								<a href=${`/solutions/${solution._id}/delete`} id="delete-btn"
									>Delete</a
								>`
						: ''}
					${!!userId && userId !== solution._ownerId && isLikedByCurrentUser === 0
						? html`<a @click=${onLikeClick} href="" id="like-btn">Like</a>`
						: ''}
				</div>
			</div>
		</div>
	</section>
`;

export default async function detailedView(ctx) {
	const solutionId = ctx.params.id;

	const {_id} = getUserData();

	try {
		const solution = await getOneSolution(solutionId);
		const likesCount = await getLikes(solutionId);
		//returns 0 if no or 1 if yes
		const isLikedByCurrentUser = await haveUserLiked(_id, solutionId);

		console.log(solution);
		console.log(likesCount);
		console.log(isLikedByCurrentUser);

		render(
			template(
				solution,
				_id,
				onLikeClickHandler.bind(ctx),
				likesCount,
				isLikedByCurrentUser
			)
		);
	} catch (err) {
		alert(err.message);
	}
}

async function onLikeClickHandler(e) {
	e.preventDefault();
	const id = this.params.id;
	try {
		await like({id});
	} catch (err) {
		console.log(err.message);
	}
}
