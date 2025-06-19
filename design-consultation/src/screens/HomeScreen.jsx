import CollectiveDelivery from '../components/CollectiveDelivery';
import Features from '../components/Features'
import FeaturesGrid from '../components/FeaturesGrid';
import Framework from '../components/Framework';
import JoinUs from '../components/JoinUs';
import ProcessMap from '../components/ProcessMap';
import UpliftDelivery from '../components/UpliftDelivery';

function HomeScreen() {

    return(
        <div className='overflow-x-hidden'>
            <Features />
            <FeaturesGrid />
            <UpliftDelivery />
            <CollectiveDelivery />
            <Framework />
            <ProcessMap />
            <JoinUs />
        </div>
    );
}

export default HomeScreen