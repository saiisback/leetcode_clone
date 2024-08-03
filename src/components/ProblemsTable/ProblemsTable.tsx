import React from 'react';
import Link from 'next/link';
import { BsCheckCircle } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { orderBy, query } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { firebase } from '@/firebase/firebase';
import { getDocs } from 'firebase/firestore';
import { DBProblem } from '@/utils/types/problem';



type ProblemsTableProps = {
    setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable:React.FC<ProblemsTableProps> = ({setLoadingProblems}) => {
    
    const problems = useGetProblems(setLoadingProblems);

    return (
        <tbody className='text-white'>
            {problems.map((problem,idx) => {
                const difficultyColor = problem.difficulty === 'Easy' ? 'text-dark-green-s' : problem.difficulty === 'Medium' ? 'text-dark-yellow' : 'text-dark-pink';
                return(
                    <tr className={`${idx % 2 == 1 ? 'bg-dark-layer-1' : ''}`} key={problem.id}>
                        <th className='px-2 py-4 font-meidum whitespace-nowrap text-dark-green-s'>
                            <BsCheckCircle fontSize={'18'} width='18' />
                        </th>
                        <td className='px-6 py-4'>
                            <Link className='hover:text-brand-orange cursor-pointer' href={`/problems/${problem.id}`}>
                                {problem.title}
                            </Link>
                        </td>
                        <td className={`px-6 py-4 ${difficultyColor}`}>
                            {problem.difficulty}
                        </td>
                        <td className='px-6 py-4'>
                            {problem.category}
                        </td>
                        <td className='px-6 py-4'>
                            {problem.points}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
export default ProblemsTable;


function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
    const [problems, setProblems] = useState<DBProblem[]>([]);

    useEffect(() => {
        const getProblems = async () => {
            //fetching data logic
            
            setLoadingProblems(true);
            const q = query(collection(firebase, 'problems'),orderBy('order','desc'));
            const querySnapshot = await getDocs(q);
            
            const tmp : DBProblem []= [];
            querySnapshot.forEach((doc) => {
                tmp.push({id:doc.id,...doc.data()} as DBProblem);
            });
            setProblems(tmp);
            setLoadingProblems(false);
        };
        getProblems();
    }, [setLoadingProblems]);

    return problems;
} 