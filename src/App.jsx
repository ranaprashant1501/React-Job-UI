import { StrictMode } from 'react';
import Cards from './Components/cards';
import jobs from './Data/jobs';

const App = () => {
    <StrictMode>
        return (
        <div id="parent">
            {jobs.map((job, idx) => {
                return <div key={idx}>
                    <Cards logo={job.logo} company={job.company} period={job.period} passion={job.passion} time={job.time} type={job.type} pay={job.pay} location={job.location} />
                </div>
            })}
        </div>
        )
    </StrictMode>

}

export default App
