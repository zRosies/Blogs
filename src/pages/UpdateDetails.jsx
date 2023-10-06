// import { useHistory } from 'react-router-dom';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../components/useFetch";
import {BiLoaderAlt} from "react-icons/bi"


const UpdateDetails = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody]= useState('');
    const [category, setCategory]=useState('General');
    const [author, setAuthor]= useState('');


    const {id} = useParams();

    const updateSubmit= (e)=>{
        e.preventDefault();
        const blog = {title, body, category, author}
        // console.log(blog)
        console.log(blog)
        // setIsPending(true);
        fetch(`https://blogsapi-8kjm.onrender.com/blog/${id}`,{
            method: 'PUT',
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New Blog Updated!')
            // setIsPending2(false);
            // history.push('/')
            window.location.href = '/';
            
            
    })
    }
  
    const {data, isPending, error} =  useFetch(`https://blogsapi-8kjm.onrender.com/blog/${id}`);
  


    useEffect(() => {
        if (data) {
          setTitle(data[0].title);
          setBody(data[0].body);
          setCategory(data[0].category);
          setAuthor(data[0].author)
        }
      }, [data]);

    return (
        <>
        <div>
        {isPending && 
                <div className="loadiv">
                    <span className="loading"><BiLoaderAlt/></span>
                    <p>Loading...</p>
            
                </div>}
                {error && <div>{error}</div>}
                {data && data.map((blog) => (
                    <div className="create" key={blog._id}>
                       
                            
                            <form action="" onSubmit={updateSubmit}>
                                <h2>Update your existing blog</h2>

                                <label htmlFor="">Blog Title</label>
                                <input type="text" required 
                                value={author}
                                onChange={(e)=>setAuthor(e.target.value)}/>
                                
                                <label htmlFor="">Blog Title</label>
                                <input type="text" required 
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                    />
                                
                                <label htmlFor="">Blog Body</label>
                                <textarea type="text" required
                                value={body}
                                onChange={(e)=>setBody(e.target.value)}
                                rows={5}
                                // placeholder={`${blog.body}`}
                                ></textarea>
                                <label htmlFor="">Blog category</label>
                                <select value={category} onChange={(e)=>setCategory(e.target.value)} required>
                                    <option value="Politics">Politics</option>
                                    <option value="Games">Games</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Turism">Turism</option>
                                    <option value="Science">Science</option>
                                    <option value="General">General</option>

                                </select>
                                {!isPending && <button>Update Blog</button>}
                                { isPending && <button disabled>Adding Blog...</button>}
                            </form>
                    </div>
                   
                ))}
       
        </div>
       
        
    </>
     );
}


 
export default UpdateDetails;