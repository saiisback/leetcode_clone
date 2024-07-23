import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { useState } from 'react';


type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {

    const authModal = useRecoilValue(authModalState);
    const [user,loading,error] = useAuthState(auth);
    const [pageLoading,setPageLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if(user) router.push('/');
        if(!loading) setPageLoading(false);
    },[user,router,loading]);
    
    if(pageLoading) return <div className='bg-gradient-to-b from-white to-black h-screen flex items-center justify-center'></div>

    return <div className='bg-gradient-to-b from-white to-black h-screen relative'>
        <div className='max-w-5x1 mx-auto'>
            <Navbar/>
            <div className='flex items-center justify-center h-[cal(100vh-rem)] pointer-events-none select-none'>
                <img src="/hero.png" alt="image" style={{ width: '75%', height: 'auto' }} />
            </div>
            {authModal.isOpen && <AuthModal/>}
        </div>
        </div>
}
export default AuthPage;