import React, { use, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';  
type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {

    const setAuthModalState = useSetRecoilState(authModalState)
    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({...prev,[e.target.name]:e.target.value}));
    };
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, type:'login'}));
    };

    const [inputs,setInputs] = useState({
        email:'',
        displayName:'',
        password:''
    });
    const router = useRouter();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password || !inputs.displayName) return alert('Please fill all the fields');
        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password);
            if(!newUser) return;
            router.push('/');
        }catch(error:any){
            alert(error.message);
        }
    }
        
    useEffect(() => {
        if(error) alert(error.message);
    },[error]);

    return (
        <form className='space-y-6 px-6 pb-4' onSubmit={handleRegister}>
        <h3 className="text-xl font-medium text-white">Register to CODE CRAFT</h3>
    <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
        <input  
        onChange={handleChangeInput} type="email" name="email" id="email" className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full
         p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" 
          placeholder='name@gmail.com'/>
    </div>
    <div>
        <label htmlFor="displayName" className="block text-sm font-medium mb-2 text-gray-300">Display Name</label>
        <input 
        onChange={handleChangeInput}  type="displayName" name="displayName" id="displayName" className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full
         p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" 
          placeholder='Sai karthik'/>
    </div>
    <div>
        <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">Password</label>
        <input onChange={handleChangeInput}  type="password" name="password" id="password" className="
        border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500
         focus:border-blue-500 block w-full
         p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" 
          placeholder='********'/>
    </div>

    <button type="submit" className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
    text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s'>
        {loading ? 'Registering...' : 'Register'}
    </button>
    <div className='text-sm font-medium text-gray-300'>
        Already have account? <a href="#" className='text-blue-700 hover:underline' onClick={handleClick}>Log in</a>
    </div>
    </form>
    );
}

export default Signup;