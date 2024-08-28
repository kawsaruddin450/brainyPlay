
import { FaBookOpen, FaTools } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';

const Features = () => {
    return (
        <div className='lg:container mx-auto'>
            <h1 className='text-7xl font-bold text-center mb-50'>Features</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <GiProgression className='text-3xl text-orange-500'></GiProgression>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Growth</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaTools className='text-3xl text-orange-500'></FaTools>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Practical</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FaBookOpen className='text-3xl text-orange-500'></FaBookOpen>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Informative</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;