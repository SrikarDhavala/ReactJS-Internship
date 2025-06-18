import CollectiveDelivery from '../components/CollectiveDelivery';
import Features from '../components/Features'
import FeaturesGrid from '../components/FeaturesGrid';
import UpliftDelivery from '../components/UpliftDelivery';

function HomeScreen() {

    return(
        <div>
            <Features />
            <FeaturesGrid />
            <UpliftDelivery />
            <CollectiveDelivery />
        </div>
    );
}

export default HomeScreen