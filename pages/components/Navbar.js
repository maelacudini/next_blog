import { logoutUser } from '@/components/redux/loginslice';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import style from '../../styles/app.module.css';
import PostsForm from './PostsForm';


const Navbar = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const router = useRouter();
  const [feedback, setFeedback] = useState('');
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const handleLogout = () => {
    try {
      dispatch(logoutUser({ isLoggedIn: false }));
      console.log('logged out');
      router.push('/');
    } catch (error) {
      console.error(error);
      setFeedback('Could not log out');
    }
  };

  return (
    <div>
    <ul className="navbar list-unstyled justify-content-end">
      <li className="nav-item me-auto">
        <Link className={`nav-link ${style.link}`} href="/">
          MyBlog
        </Link>
      </li>
      <li className="nav-item me-3">
        <Link className={`nav-link ${style.link}`} href="/profile">
          Profile
        </Link>
      </li>
      <li className="nav-item me-3">
        <Link className={`nav-link ${style.link}`} href="/travels">
          Travels
        </Link>
      </li>
      <li className="nav-item">
        {login.isLoggedIn ? (
          <button className={`nav-link ${style.link}`} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link className={`nav-link ${style.link}`} href="/login">
            Login
          </Link>
        )}
      </li>
    </ul>

    {login.isLoggedIn && <div className="d-flex justify-content-between">
    <h3>Welcome Admin!</h3>
    <button onClick={toggleForm} className="btn btn-success">New Post</button>       
    </div>}

    {login.isLoggedIn && showForm && <PostsForm />}      
    </div>

  );
};

export default Navbar;
