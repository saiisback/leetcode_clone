import React, { useState } from 'react';
import PrefrenceNav from './PrefrenceNav/PrefrenceNav';
import Split from 'react-split';
import Codemirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { csharp } from '@replit/codemirror-lang-csharp';
import { php } from '@codemirror/lang-php';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import EditorFooter from './EditorFooter';
import { Problem } from '@/utils/types/problem';

type PlaygroundProps = {
  problem:Problem;
};

const Playground: React.FC<PlaygroundProps> = ({problem}) => {
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);

  return (
    <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
      <PrefrenceNav />
      <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[50, 50]} minSize={60}>
        <div className='w-full overflow-auto'>
          <Codemirror
            value={problem.starterCode}
            theme={vscodeDark}
            extensions={[javascript(), python(), csharp(), php(), cpp(), java()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div className='w-full px-5 overflow-auto'>
            {/* test case heading*/}
          <div className='flex h-10 items-center space-x-6'>
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
                <div className='text-sm font medium leading-5 text-white'>Testcases</div>
                <hr className='absolute bottom-0 w-full h-0.5 w-full rounded-full border-none bg-white' />
            </div>
          </div>
            <div className='flex'>
                {problem.examples.map((example, index) => (
                  <div className='mr-2 items-start mt-2 text-white' key={example.id}
                  onClick={() => setActiveTestCaseId(index)}>
                  <div className='flex flex-wrap items-center gap-y-4'>
                      <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg=dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointecr whitespace-nowrap'>
                          Case {index+1}
                      </div>
                  </div>
              </div>
              ))}
            </div>
            <div className='font:semi-blod my-4'>
                <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                <div className='w-full cursor-text rounded-0nlg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                    {problem.examples[activeTestCaseId].inputText}
                </div>
                <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                  {problem.examples[activeTestCaseId].outputText}
                </div>
            </div>
        </div>
      </Split>
      <EditorFooter/>
    </div>
  );
}

export default Playground;
