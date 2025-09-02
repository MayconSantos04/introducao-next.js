import { useState } from "react"


export default function feedPage() {

    const [posts, setPosts] = useState([post])

    const [post, setPost] = useState({
        id: 0,
        Image: '',
        title: '',
        description: '',
        like: 0,
    })

    const handleLike = (id: number) => {
        const updatedPosts = posts.map(post => {
            if (post.id === id) {
                return { ...post, like: post.like + 1 }
            }
            return post
        })
        setPosts(updatedPosts)
    }

    return(
        <div>

            <h1>Feed</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <img src={post.Image} alt={post.title} height={50} width={50} />
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span>{post.like} likes</span>

                    <button onClick={() => handleLike(post.id)}>Like</button>
                </div>
            ))}

        </div>
    )
}