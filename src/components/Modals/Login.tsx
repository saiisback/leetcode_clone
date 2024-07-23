import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useState } from 'react';
import router, { useRouter } from 'next/router';
import { useEffect } from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleClick = (type:'login' | 'register' | 'forgotpassword') => {
        setAuthModalState((prev) => ({...prev, type}));
    }
    const [inputs,setInputs] = useState({
        email:'',
        password:''
    });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const router = useRouter(); 

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({...prev,[e.target.name]:e.target.value}));
    }

    const handleLogin = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password) return alert('Please fill all the fields');
        try{
            const newUser = await signInWithEmailAndPassword(inputs.email,inputs.password);
            if(!newUser) return;
            router.push('/');
        }catch(error:any){
            alert(error.message);
        }
    }
    
    useEffect(() => {
        if(error) alert(error.message);
    },[error]);

    return <form className='space-y-6 px-6 pb-4' onSubmit={handleLogin}>
        <h3 className="text-xl font-medium text-white">Login in to CODE CRAFT</h3>
    <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
        <input onChange={handleInputChange} type="email" name="email" id="email" className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full
         p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" 
          placeholder='name@gmail.com'/>
    </div>
    <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">Your Password</label>
        <input onChange={handleInputChange} type="password" name="password" id="password" className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full
         p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" 
          placeholder='********'/>
    </div>

    <button type="submit" className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
    text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
        {loading ? 'Loading...' : 'Log in'}
    </button>
    <button className='flex w-full justigy-end' onClick={() => handleClick('forgotpassword')}>
        <a href="#" className='text-sm block text-brand-orange hover:underline w-full text right'>Forgot Password?</a>
    </button>
    <div className='text-sm font-medium text-gray-300'>
        Not registered? <a href="#" className='text-blue-700 hover:underline' onClick={() => handleClick('register')}>Create an account</a>
    </div>
    </form>
}
export default Login;