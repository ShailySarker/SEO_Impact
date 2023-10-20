import Header from '../../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/shared/Footer/Footer';

const SocialImpactLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SocialImpactLayout;