
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Header/Banner/Banner';


const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Banner cards={cards}></Banner>
        
        </div>
    );
};

export default Home;