import {render as baseRender, html} from '../../node_modules/lit-html/lit-html.js';
const mainElement = document.querySelector('#wrapper main');

export const render = template => {
	baseRender(template, mainElement);
};

export {baseRender, html};
