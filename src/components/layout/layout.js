import React from 'react';
import Meta from './meta';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from './container';

const Layout = ({title, children}) => (
	<main>
		<Meta title={title}/>
		<Header/>
		<Container>{children}</Container>
		<Footer/>
	</main>
);

export default Layout;
