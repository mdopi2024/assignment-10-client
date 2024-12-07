
import { useLoaderData } from 'react-router-dom';

const VisaApplication = () => {

    const myApplication = useLoaderData()
    console.log(myApplication)

    
    return (
        <div>
            my visa application
        </div>
    );
};

export default VisaApplication;