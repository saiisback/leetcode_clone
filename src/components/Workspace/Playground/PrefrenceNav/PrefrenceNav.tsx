import React from 'react';
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai';
import { problems } from '@/mockProblems/problems';
import { doc } from 'firebase/firestore';

type PrefrenceNavProps = {
    
};

const PrefrenceNav:React.FC<PrefrenceNavProps> = () => {
    
    return <div className='flex item-center justify-between bg-dark-layer-2 h-11 w-full'>
        <div className='flex items-center text-white'>
				<button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'>
					<div className='flex items-center px-1'>
						<div className='text-xs text-label-2 dark:text-dark-label-2'>Code Editor</div>
					</div>
				</button>
			</div>

			<div className='flex items-center m-2'>
				<button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineSetting />
					</div>
					<div className='preferenceBtn-tooltip'>Settings</div>
				</button>

				<button className='preferenceBtn group'>
					<div className='h-4 w-4 text-dark-gray-6 font-bold text-lg'>
						<AiOutlineFullscreen />
					</div>
					<div className='preferenceBtn-tooltip'>Full Screen</div>
				</button>
			</div>
    </div>
}
export default PrefrenceNav;