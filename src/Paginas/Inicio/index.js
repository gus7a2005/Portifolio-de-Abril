import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import PostCard from "Components/PostCard";

export default function Inicio () {
    return(
            <ul className={styles.post}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}
            </ul>
    )
}