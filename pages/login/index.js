import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/components/redux/loginslice';
import { useRouter } from 'next/router';
import style from '../../styles/app.module.css';
import { Parallax } from 'react-scroll-parallax';
import PostsForm from '../components/PostsForm';

const Login = () => {
    const router = useRouter();
    
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const [feedback, setFeedback] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            if (input) {
                dispatch(
                    loginUser({
                        username: input.username,
                        password: input.password,
                        isLoggedIn: true
                    })
                )
            }         
            console.log('logged in');
            router.push('/');
        } catch (error) {
            console.error(error);
            setFeedback('Could not log in')
            setTimeout(() => {
                setFeedback('');
            }, 5000);   
        }

        setInput({
            username: '',
            password: ''
        })
    }

    return (
        <Parallax speed={-10} className={style.login}>
            <form className='p-3' onSubmit={handleSubmit}>
                <h3>Login</h3>
                <p>{feedback}</p>
                <label htmlFor="username">Username</label>
                <input 
                    id='username'
                    className="form-control mb-3" 
                    type="text" 
                    name='username'
                    minLength={3}
                    value={input.username}
                    onChange={(e) => setInput({...input, username: e.target.value})}
                    required
                />

                <label htmlFor="password">Password</label>
                <input 
                    id='password'
                    className="form-control mb-3" 
                    type="password" 
                    name='password'
                    minLength={3}
                    value={input.password}
                    onChange={(e) => setInput({...input, password: e.target.value})}
                    required
                />

                <div>
                    <button className="btn btn-success">Login</button>
                </div>
            </form>
        </Parallax>
    );
}
 
export default Login;