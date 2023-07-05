import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../redux/postslice';
import style from '../../styles/app.module.css';
import { Fragment, useState } from 'react';
import Link from 'next/link';



const Posts = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const posts = useSelector((state) => state.posts)
    const login = useSelector((state) => state.login)
    const dispatch = useDispatch();

    const handleDelete = (postId) => {
        dispatch(
            deletePost({
                id: postId
            })
        )
    }

    const filteredPosts = posts.filter((post) =>
        post.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Fragment>
            <div className={`${style.inputGroup} input-group mb-3`}>
                <span className={`input-group-text ${style.inputGroupText}`} id="basic-addon1">Search For a Post</span>
                <input
                    className={`form-control ${style.formControl}`}
                    type="text"
                    placeholder="Roma"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />     
            </div>
     
            <div className={style.postContainer}>
                {filteredPosts.map((post) => (
                    <article className={style.postCard} key={post.id}>
                        <h3>{post.name}</h3>
                        <img className={style.postImage} src={post.image} alt={post.name}/>
                        <p className='mt-3'>{post.description.slice(0, 100)}...</p>
                        <small>{post.date}</small>
                        <div className='mt-3'>
                            <Link className='btn btn-success me-3' href="/travels">Read more</Link>
                            {login.isLoggedIn && <button onClick={() => handleDelete(post.id)} className='btn btn-danger'>Delete post</button>}
                        </div>
                    </article>
                ))}
            </div>
        </Fragment>
    );
}
 
export default Posts;