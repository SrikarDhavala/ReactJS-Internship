import { FEATURES_GRID_DATA } from "../dummyData";
import useGradientUpdater from "../hooks/useGradientUpdater"
import { easeInOut, motion } from "framer-motion";

function FeaturesGrid() {
    const gradientRefs = useGradientUpdater();
    const featuredGridSettings = [
        {
            cardImgPadding: "px-5 pt-5",
            cardContentPadding: "px-6 pb-10",
            cardColSpan: "lg:col-span-1 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientAfter: "after:content-[''] after:bg-linear-135 after:from-[#F1B2A8] after:via-[#EC57A8] after:to-[#5B5AF7] after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-left-[10%] after:blur-[40px] after:rounded-full",
            cardGradientBefore: "before:content-[''] before:bg-linear-135 before:from-[#F1B2A8] before:via-[#EC57A8] before:to-[#5B5AF7] before:absolute before:w-[200px] before:h-[200px] before:-bottom-[10%] before:-right-[10%] before:blur-[40px] before:rounded-full",
        },
        {
            cardImgPadding: "px-12 pt-6",
            cardContentPadding: "px-6 pb-10",
            cardColSpan: "lg:col-span-2 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientAfter: "after:content-[''] after:bg-linear-135 after:from-[#F1B2A8] after:via-[#EC57A8] after:to-[#5B5AF7] after:absolute after:w-[217px] after:h-[217px] after:-top-[10%] after:-right-[5%] after:blur-[30px] after:rounded-full",
            cardGradientBefore: "before:content-[''] before:bg-linear-135 before:from-[#F1B2A8] before:via-[#EC57A8] before:to-[#5B5AF7] before:absolute before:w-[270px] before:h-[270px] before:bottom-0 before:-left-[10%] before:blur-[30px] before:rounded-full",
        },
        {
            cardImgPadding: "pt-5 px-7",
            cardContentPadding: "px-4 pb-9",
            cardColSpan: "lg:col-span-1 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientAfter: "after:content-[''] after:bg-linear-135 after:from-[#F1B2A8] after:via-[#EC57A8] after:to-[#5B5AF7] after:absolute after:w-[213px] after:h-[213px] after:-top-[10%] after:-right-[10%] after:blur-[40px] after:rounded-full",
            cardGradientBefore: "before:content-[''] before:bg-linear-135 before:from-[#F1B2A8] before:via-[#EC57A8] before:to-[#5B5AF7] before:absolute before:w-[213px] before:h-[213px] before:top-[20%] before:-left-[15%] before:blur-[30px] before:rounded-full",
        },
        {
            cardImgPadding: "",
            cardContentPadding: "px-4 pt-7",
            cardColSpan: "lg:col-span-1 col-span-full",
            cardFlexCol: "flex-col-reverse",
            cardGradientAfter: "after:content-[''] after:bg-linear-135 after:from-[#F1B2A8] after:via-[#EC57A8] after:to-[#5B5AF7] after:absolute after:w-[213px] after:h-[213px] after:top-[35%] after:-right-[30%] after:blur-[40px] after:rounded-full",
            cardGradientBefore: "before:content-[''] before:bg-linear-135 before:from-[#F1B2A8] before:via-[#EC57A8] before:to-[#5B5AF7] before:absolute before:w-[200px] before:h-[200px] before:top-[-10%] before:-left-[10%] before:blur-[30px] before:rounded-full",
        },
        {
            cardImgPadding: "pt-8 px-12",
            cardContentPadding: "px-4 pb-9",
            cardColSpan: "lg:col-span-1 col-span-full",
            cardFlexCol: "flex-col",
            cardGradientAfter: "after:content-[''] after:bg-linear-135 after:from-[#F1B2A8] after:via-[#EC57A8] after:to-[#5B5AF7] after:absolute after:w-[213px] after:h-[213px] after:top-[40%] after:-right-[25%] after:blur-[30px] after:rounded-full",
            cardGradientBefore: "before:content-[''] before:bg-linear-135 before:from-[#F1B2A8] before:via-[#EC57A8] before:to-[#5B5AF7] before:absolute before:w-[200px] before:h-[200px] before:-top-[10%] before:-left-[10%] before:blur-[30px] before:rounded-full",
        },
    ]

    return(
        <section className="py-[65px] text-white px-4">
            <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold font-arial max-w-[986px] mx-auto">Never waste more than a day handing over design requirements with these features:</h2>
            <div className="max-w-[1200px] mx-auto lg:mt-[65px] mt-10">
                <div className="grid grid-cols-3 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10">
                    {
                        FEATURES_GRID_DATA?.map(({id, title, description, image}, index) => {
                            return(
                                <motion.div key={id} className={`bg-linear-135 from-[#F1B2A8] via-[#EC57A8] to-[#5B5AF7] rounded-3xl p-[3px] md:min-h-[444px] min-h-auto overflow-hidden ${featuredGridSettings[index].cardColSpan}`} ref={(el) => gradientRefs.current[index] = el} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: easeInOut }} whileHover={{ scale: 1.05 }}>
                                    <div className={`rounded-3xl overflow-hidden bg-[#2c2c2c] flex relative ${featuredGridSettings[index].cardFlexCol} ${featuredGridSettings[index].cardGradientAfter} ${featuredGridSettings[index].cardGradientBefore} justify-between items-center h-full lg:gap-y-[26px] md:gap-y-5 gap-y-4`}>
                                        <img src={image} alt="" className={`z-10 relative ${featuredGridSettings[index].cardImgPadding}`} />
                                        <div className={`gap-y-2 flex flex-col items-center text-center relative z-10 ${featuredGridSettings[index].cardContentPadding}`}>
                                            <h4 className="lg:text-2xl md:text-xl text-lg text-white font-arial text-center font-semibold">
                                                {title}
                                            </h4>
                                            <p className="text-white lg:text-base text-sm">{description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default FeaturesGrid