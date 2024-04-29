import React from "react";

import img1 from "../../media/downloadedSvgs/analyze-on-screen.svg"

const PortfolioPage = () => {
    return <>
    <div className="section">
    <div className="animated-left">
        <h1>projekty</h1>
        <p><a className="a" href="https://signpost.stornoband.com/">Web pro kapelu Storno</a>. (Propagace kapely Storno. Obsahuje veškeré důležité informace, diskografii a informace o nadcházejících koncertech. )</p>
        <p><a className="a" href="https://signpost.stornoband.com/">Webový rozcestník pro kapelu Storno</a>. (Na koncertech mají u podia QR kod, který odkazuje na tuto stránku.)</p>
    </div>
    <div className="animated-right"><img src={ img1 } alt="" /></div>
    </div>
    </>
}

export default PortfolioPage;