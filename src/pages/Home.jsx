
import Bloglist from "./Bloglist";
import useFetch from "../components/useFetch";
import {BiLoaderAlt} from "react-icons/bi"

const Home = () => {
    

    // const handleDelete=(id)=>{
    //     const newblogs = blogs.filter(blogs => blogs.id !== id);
    //     setblogs(newblogs);
    // }
    const url = encodeURI("https://blogsapi-8kjm.onrender.com/blog")
    const {data, isPending, error} = useFetch(url)
    
    
        
    return ( 

        <div className="home">
            {error && <div>{error}</div>}
            {isPending && 
                <div className="loadiv">
                    <span className="loading"><BiLoaderAlt/></span>
                    <p>Loading...</p>
            
                </div>}
            {data && <Bloglist blogs={data} title="All Blogs" ></Bloglist>}
            {/* <Bloglist blogs={blogs.filter((blog)=>blog.author === "Hannah")} title="Hannah's Blogs" ></Bloglist> */}
        </div>
     );
}
 
export default Home;