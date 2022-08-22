import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogList from './BlogList';
import './Blog.css';
const About = () => {
	const [blog, setBlog] = useState(null);
	// const api = {
	// 	key: '78135815-186e-4686-8810-ca9bf8e05216',
	// };

	useEffect(() => {
		const fetchData = async () =>
			await axios
				.get(
					`https://content.guardianapis.com/search?page=2&q=workout&api-key=78135815-186e-4686-8810-ca9bf8e05216&show-fields=thumbnail`
				)
				.then((data) => {
					return data.data.response.results;
				})
				.then((results) => {
					setBlog(results);
				});
		fetchData();
	}, []);

	return (
		<div className="blog-container">
			<h1>Latest fitness news</h1>
			<div className="article">
				{blog ? <BlogList blog={blog} setBlog={setBlog} /> : 'Loading...'}
			</div>
		</div>
	);
};

export default About;
