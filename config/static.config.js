import Document from './document';

const getSiteData = () => ({title: 'React Static Starter'});

const getRoutes = () => [{
	path: '/',
	component: 'src/pages/home'
}, {
	path: '404',
	component: 'src/pages/not-found'
}];

export default {
	plugins: [
		'react-static-plugin-styled-components'
	],
	getSiteData,
	getRoutes,
	Document
};
