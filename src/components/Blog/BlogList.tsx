type BlogFields = {
	id: string;
	webUrl: string;
	fields: any;
	webTitle: string;
	webPublicationDate: string;
};

const BlogList = ({ blogs }: { blogs: Array<BlogFields> }) => {
	if (blogs === null) {
		return <div className="color">Loading...</div>;
	} else {
		return (
			<>
				{blogs.map((blog) => {
					return (
						<a
							key={blog.id}
							rel="noreferrer"
							target="_blank"
							href={blog.webUrl}
						>
							<div key={blog.id} className="article-container">
								<img src={blog.fields.thumbnail} alt="img" />
								<h5>{blog.webTitle}</h5>
								<p>
									<i>{blog.webPublicationDate.slice(0, 7)}</i>
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
