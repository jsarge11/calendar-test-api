import * as React from 'react';
import axios from 'axios';
import './global.scss';

const { useEffect } = React;

export const Main = () => {
	useEffect(() => {
		axios
			.get('/test')
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return <h1 className="main">Check the console</h1>;
};
