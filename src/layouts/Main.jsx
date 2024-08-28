
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';

const Main = () => {
    return (
        <div>
            <HelmetProvider>
                <div className="App">
                    <Helmet>
                        <title>BrainyPlay</title>
                    </Helmet>
                </div>
            </HelmetProvider>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;