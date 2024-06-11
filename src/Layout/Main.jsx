
import NavBar from '../Pages/Shared/NavBar';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';
import ScrollLine from '../hooks/ScrollLine';

const Main = () => {

    useScrollToTop()

    return (
        <div>
            <ScrollLine />
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
