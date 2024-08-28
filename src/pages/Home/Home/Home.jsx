import { Helmet } from 'react-helmet';
import background from '../../../assets/homebanner.jpg'
import Features from '../Features/Features';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BrainyPlay - Home</title>
            </Helmet>
            <div className="">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${background})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-white text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold font-nerko">Let's Explore Together!</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            </p>
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-0">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Shop></Shop>
            <Features></Features>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;