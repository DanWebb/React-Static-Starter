import React from 'react';
import {any, node, object} from 'prop-types';

const Document = ({Html, Head, Body, children}) => (
	<Html>
		<Head>
			<meta charSet="UTF-8"/>
			<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
			<title>React Static Starter</title>
		</Head>
		<Body>
			{children}
		</Body>
	</Html>
);

Document.propTypes = {
	Html: any.isRequired,
	Head: any.isRequired,
	Body: any.isRequired,
	children: node.isRequired
};

export default Document;
