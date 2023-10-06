import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
    // console.log(blogs);
    // console.log(blogs)
   

    return (
        <div className="bloglist">
            <h2>{title}</h2>

            {blogs.map((blog) =>  (
                
                <div className="preview" key={blog._id}>
                                    {/* Assuming 'blog._id' is a unique identifier for each blog */}
                    <Link to={`/blog/${blog._id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Bloglist;