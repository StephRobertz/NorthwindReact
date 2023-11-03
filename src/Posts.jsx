import React, {useState, useEffect} from "react"
import './App.css'

const Posts = ({info, tervehdys}) => {

    //State
    const [posts, setPosts] = useState([])
    const [showPosts, setShowPosts] = useState(false)

    //Use effect hook funktio tulee ajetuksi aina alussa kerran
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPosts(data))
    },
    [])

return(
    <div className="posts">
        <h2 onClick={() => setShowPosts(!showPosts)}>Show Typicode posts</h2>

        {/* propsina vastaanotetut */}
        <p>{tervehdys}</p>
        <p>{info}</p>

        {showPosts && posts && posts.map(p => 
        <div className="post">
            <h4>{p.title}</h4>
            <p>{p.body}</p>
            
        </div>
        )}


    </div>
    )
}
export default Posts