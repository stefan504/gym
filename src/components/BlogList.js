import React from 'react';

const BlogList = ({ blog, setBlog }) => {
	if (blog === null) {
		return <div className="color">Loading...</div>;
	} else {
		return (
			<>
				{blog.map((blg) => {
					return (
						<a key={blg.id} rel="noreferrer" target="_blank" href={blg.webUrl}>
							<div key={blg.id} className="article-container">
								<img src={blg.fields.thumbnail} alt="img" />
								<h5>{blg.webTitle}</h5>
								<p>
									<i>{blg.webPublicationDate.slice(0, 7)}</i>
								</p>
							</div>
						</a>
					);
				})}
			</>
		);
	}
};

export default BlogList;
