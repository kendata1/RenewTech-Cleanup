import {deleteSolution} from '../api/solutionsApi.js';
import page from '../lib/page.js';

export default function deleteView(ctx) {
	const id = ctx.params.id;

	if (confirm('Are you sure you want to delete this solution?')) {
		deleteSolution(id);
		page.redirect('/solutions');
	}
}
