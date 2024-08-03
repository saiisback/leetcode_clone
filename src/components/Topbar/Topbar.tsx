import React from 'react';
import Link from 'next/link';
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import Timer from '../Timer/Timer';


type TopbarProps = {
    problemPage?: boolean;
};

const Topbar:React.FC<TopbarProps> = ({problemPage}) => {
    const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
    return(
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between ${!problemPage? "max-w-[1200px] mx-auto":''}`}>
				<Link href='/' className='h-[22px] flex-1'>
					<img src='/logo2.png' alt='Logo' className='h-full' />
				</Link>

				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						
						<Link href='/' className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'>
						<div>
							<BsList/>
						</div>
						<p>Problems</p>
						</Link>
					</div>

				)}
				
				{!problemPage && (
					<div>
						<h2	className='bg-dark-fill-3 py-1.5 px-3 cursor-none rounded text-brand-orange hover:bg-dark-fill-2'
						>
							CODE CRAFT
						</h2>
				    </div>
				)}
                
				<div className='flex items-center space-x-4 flex-1 justify-end'>
                <div>
						<h2	className='bg-black py-1.5 px-3 cursor-none rounded text-brand-orange '
						>
							Points:
						</h2>
				    </div>
					{!user &&(
                        <Link href='/auth' onClick={
							() => {
								setAuthModalState((prev) => ({...prev, isOpen: true, type: 'login'}));
							}
						}>
						<button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ' >Sign In</button>
					    </Link>
                )}
				{problemPage && (<Timer/>)}
					{user &&(
                        <div className='cursor-pointer group relative'>
                            <img src='/avatar.png' alt='user-pfp' className='h-8 w-8 rounded-full' />
                            <div
		                    className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 
		                    transition-all duration-300  ease-in-out'
	                        >
		                <p className='text-sm'>{user.email}</p>
	                    </div>
                        </div>
                        
                    )}
                    {user && <Logout />}
				</div>
			</div>
</nav>
    );
};
export default Topbar;