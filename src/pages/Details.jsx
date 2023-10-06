import { Link,  useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import {BiLoaderAlt} from "react-icons/bi"



const BlogDetails = () => {
    const {id} = useParams();

    
    // const url = encodeURI("http://localhost:8080/blog/")
    const {data: blog, error, isPending}=useFetch(`https://blogsapi-8kjm.onrender.com/blog/${id}`)
 
    const HandleDelete= ()=>{
        console.log('aaa');
        fetch(`https://blogsapi-8kjm.onrender.com/blog/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify(blog)
        }).then((response)=>{
            console.log(response)
            if(response.ok){
                
                window.location.href='/';
                
            }
            else{
                console.log(response)
                console.log('failed to delete blog');
            }
        
        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }


    return ( 
        <>
        {isPending && 
            <div className="loadiv">
                <span className="loading"><BiLoaderAlt/></span>
                <p>Loading...</p>
            </div>
        }
        
        
             
            {error && <div>{error}</div>}
            {blog &&(
                
                <div className="blogdetails">
                <article>
                    <h1>{blog[0].category}</h1>
                    <h2>{blog[0].title}</h2>
                    
                    
                    <div>{blog[0].body}</div>
                    <p>Written By {blog[0].author}</p>
                    <div className="buttons">
                        <button><Link to={`/update/${id}`}>Update</Link></button>
                        <button onClick={HandleDelete}>Delete</button>
                    </div>
                   
                </article>
                </div>
            )}         
        
        </>
     );
}
 
export default BlogDetails;