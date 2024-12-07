import page from './lib/page.js';
import navigationMiddleware from './middlewares/navigationMiddleware.js';
import addSolutionView from './views/addSolutionView.js';
import deleteView from './views/deleteView.js';
import detailedView from './views/detailedView.js';
import editView from './views/editView.js';
import homeView from './views/homeView.js';
import loginView from './views/loginView.js';
import registerView from './views/registerView.js';
import solutionsView from './views/solutionsView.js';

page(navigationMiddleware);

page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/solutions', solutionsView);
page('/solutions/add', addSolutionView);
page('/solutions/:id', detailedView);
page('/solutions/:id/delete', deleteView);
page('/solutions/:id/edit', editView);
page();
