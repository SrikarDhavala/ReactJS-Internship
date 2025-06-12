import React from "react";
import LoaderImg from '../../../public/loader.svg'

function Loader() {

    return(
        <div className="loader flex flex-c">
            <img src={LoaderImg} alt="loader" />
        </div>
    );
}

export default Loader