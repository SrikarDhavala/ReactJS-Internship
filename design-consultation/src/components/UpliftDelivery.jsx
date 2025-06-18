import { UPLIFT_DELIVERY_DATA } from "../dummyData";
import useGradientUpdater from "../hooks/useGradientUpdater"
import { easeInOut, motion } from "framer-motion";

function UpliftDelivery() {
    const gradientRefs = useGradientUpdater();

    return(
        <section className="lg:py-[65px] py-10 px-4">
            <div className="max-w-[1200px] mx-auto">
                <h3 className="text-center text-white font-arial lg:text-3xl md:text-2xl text-xl font-semibold">
                    Uplift Your Delivery Squad
                </h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-10 md:mt-8 mt-6">
                    {
                        UPLIFT_DELIVERY_DATA?.map(({id, title, icon, description}, index) => {
                            return(
                                <motion.div key={id} className="bg-linear-135 from-[#F1B2A8] via-[#EC57A8] to-[#5B5AF7] rounded-3xl p-[3px] md:min-h-[315px] min-h-auto" ref={(el) => gradientRefs.current[index] = el} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: easeInOut }} whileHover={{ scale: 1.05 }}>
                                    <div className="rounded-3xl bg-[#2c2c2c] flex flex-col items-start h-full lg:p-8 md:p-6 p4">
                                        <img src={icon} alt="" className="w-12" />
                                        <h4 className="lg:text-xl md:text-lg text-base text-white font-arial font-semibold mt-5 mb-4">{title}</h4>
                                        <p className="text-white lg:text-base text-sm font-arial">{description}</p>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default UpliftDelivery