
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <h3 className='text-3xl font-extrabold'>My Website</h3>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ?
                <p>loading...</p>:<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;