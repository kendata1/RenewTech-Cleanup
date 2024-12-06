import page from './lib/page.js';
import navigationMiddleware from './middlewares/navigationMiddleware.js';
import homeView from './views/homeView.js';
import loginView from './views/loginView.js';
import registerView from './views/registerView.js';

page(navigationMiddleware);

page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page();
