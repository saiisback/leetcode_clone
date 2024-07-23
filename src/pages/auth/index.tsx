import AuthModal from '@/components/Modals/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    
    return <div className='bg-gradient-to-b from-white to-black h-screen relative'>
        <div className='max-w-5x1 mx-auto'>
            <Navbar/>
            <div className='flex items-center justify-center h-[cal(100vh-rem)] pointer-events-none select-none'>
                <img src="/hero.png" alt="image" style={{ width: '75%', height: 'auto' }} />
            </div>
            <AuthModal/>
        </div>
        </div>
}
export default AuthPage;