import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import './Blog.css';
const About = () => {
	const API = {
		KEY: '78135815-186e-4686-8810-ca9bf8e05216',
	};
	const [blogs, setBlog] = useState(null);

	useEffect(() => {
		const fetchData = async () =>
			axios
				.get(
					`https://content.guardianapis.com/search?page=2&q=workout&api-key=${API.KEY}&show-fields=thumbnail`
				)
				.then((data) => {
					return data.data.response.results;
				})
				.then((results) => {
					setBlog(results);
				});
		fetchData();
	}, [API.KEY]);

	return (
		<div className="blog-container">
			<h1>Latest fitness news</h1>
			<div className="article">
				{blogs ? <BlogList blogs={blogs} /> : 'Loading...'}
			</div>
		</div>
	);
};

export default About;
