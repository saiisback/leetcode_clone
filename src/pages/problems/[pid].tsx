import Topbar from '@/components/Topbar/Topbar';
import React from 'react';
import Workspace from '@/components/Workspace/Workspace';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return <div>
        <Topbar problemPage/>
        <Workspace/>
    </div>
}
export default ProblemPage;