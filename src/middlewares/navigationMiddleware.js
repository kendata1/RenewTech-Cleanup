import navigationView from '../views/navigationView.js';

export default function navigationMiddleware(ctx, next) {
	navigationView();

	next();
}
