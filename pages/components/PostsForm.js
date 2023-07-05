import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/postslice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from '../../styles/app.module.css';

const PostsForm = () => {
  const [feedback, setFeedback] = useState('');
  const posts = useSelector((state) => state.posts)


  function generateUniqueId() {
    var newId = uuidv4();
  
    var existingIds = posts.map(function(post) {
      return post.id;
    });
  
    while (existingIds.includes(newId)) {
      newId = uuidv4();
    }
  
    return newId;
  }

  const [input, setInput] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    date: ''
  })
    
  const dispatch = useDispatch();
  
  const handleForm = (event) => {
    event.preventDefault();

    if (input.name.trim() === '' || input.description.trim() === '') {
      setFeedback('Inputs cannot be empty');
      return; // Exit the function if inputs are empty
    }

    try {
      if (input) {
        dispatch(
          addPost({
            id: generateUniqueId(),
            name: input.name,
            description: input.description,
            image: input.image,
            date: new Date().toLocaleDateString()
          })
        )
      }
      setFeedback('Post added!')
      setTimeout(() => {
          setFeedback('');
      }, 5000);   
      } catch (error) {
        console.error(error);
        setFeedback('Could not add post')
        setTimeout(() => {
            setFeedback('');
        }, 5000);   
      }

      setInput({
        name: '',
        description: '',
        image: ''
      });
    }

  return (
    <div className={style.postForm}>
      <form onSubmit={handleForm} className='p-3'>
        <h3>Add Post</h3>
        <p>{feedback}</p>
        <label htmlFor="title">Title</label>
        <input 
          id='title'
          className='form-control mb-3' 
          type="text" 
          name='name'
          minLength={3}
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          required
        />

        <label htmlFor="description">Description</label>
        <input 
          id='description'
          className='form-control mb-3' 
          type="text" 
          name='description' 
          value={input.description}
          minLength={3}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
          required 
        />

        <label htmlFor="image">Image</label>
        <input 
          id='image'
          className='form-control mb-3' 
          type="url" 
          name='image'
          value={input.image}
          onChange={(e) => setInput({ ...input, image: e.target.value })}
          required
        />

        <div>
          <button className='btn btn-success' type='submit'>Add post</button>
        </div>
      </form>        
    </div>
  );
}
 
export default PostsForm;