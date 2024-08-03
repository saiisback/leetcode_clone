import Image from "next/image";
import { Inter } from "next/font/google";
import Topbar from "@/components/Topbar/Topbar";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import React, { useState } from "react";
import { toast } from 'react-toastify';

import { doc, setDoc } from "firebase/firestore";
import { firebase } from "@/firebase/firebase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[loadingProblems, setLoadingProblems] = useState(true);

  const[inputs,setInputs] = useState({
    id: "",
    title: "",
    difficulty: "",
    category: "",
    points: "",
    order: "",
  });

  const handleInputchage = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputs({...inputs, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //converting inputts
    const newProblem = {
      ...inputs,
      order:Number(inputs.order),
    }
    await setDoc(doc(firebase, "problems", inputs.id),newProblem);
    toast.success("Problem added to firestore");

  }

  return (
    <main className="bg-dark-layer-2 min-h-screen">
      <Topbar/>
      <h1
  className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
    👇 &ldquo; Problem Statements &rdquo; 👇
  </h1>

  <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
    {loadingProblems &&(
      <div className=" max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
        {[...Array(10)].map((_, idx) => (<LoadingSkeleton key={idx} />))}
      </div>
    )}
  <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
  {!loadingProblems && (
    <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
      <tr>
        <th scope='col' className='px-1 py-3 w-0 font-medium'>
          Status
        </th>
        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Title
        </th>
        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Difficulty
        </th>

        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Category
        </th>
        <th scope='col' className='px-6 py-3 w-0 font-medium'>
          Points
        </th>
      </tr>
    </thead>
  )}
    
    <ProblemsTable setLoadingProblems={setLoadingProblems} />
  </table>
  </div>
  <form className="p-6 flex flex-col max-w-s gap-3" onSubmit={handleSubmit}>
    <input onChange={handleInputchage} type='text' placeholder="problem id" name="id"/>
    <input onChange={handleInputchage} type='text' placeholder="title" name="title"/>
    <input onChange={handleInputchage} type='text' placeholder="difficulty" name="difficulty"/>
    <input onChange={handleInputchage} type='text' placeholder="category" name="category"/>
    <input onChange={handleInputchage} type='text' placeholder="points" name="points"/>
    <input onChange={handleInputchage} type='text' placeholder="order" name="order"/>
    <button className="bg-white">Save to firestore</button>
    </form>
    </main>
  );
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};