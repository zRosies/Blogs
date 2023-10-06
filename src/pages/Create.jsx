import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody]= useState('');
    const [category, setCategory]=useState('General');
    const [author, setAuthor]= useState('');
    const [isPending, setIsPending]= useState(false);
    // const history= useHistory();
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        const blog = {title, body, category, author}
        // console.log(blog)
        console.log(blog)
        setIsPending(true);
        fetch('https://blogsapi-8kjm.onrender.com/blog',{
            method: 'POST',
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added!')
            setIsPending(false);
            
            window.location.href = '/';
    })
    }
    return ( 
        <div className="create">
            
            <form action="" onSubmit={handleSubmit}>
                <h2>Add new Blog</h2>
                <label htmlFor="">Blog Title</label>
                <input type="text" required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>

                <label htmlFor="">Blog author</label>
                <input type="text" required 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}/>

                <label htmlFor="">Blog Body</label>
                <textarea type="text" required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                rows={5}></textarea>
                <label htmlFor="">Blog Category</label>
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Politics">Politics</option>
                    <option value="Games">Games</option>
                    <option value="Sports">Sports</option>
                    <option value="Turism">Turism</option>
                    <option value="Science">Science</option>
                    <option value="General">General</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;