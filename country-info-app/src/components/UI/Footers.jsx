import footerContact from '../../api/footerApi.json'

function Footers() {

    return(
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {footerContact.map((currData, index) => {
                    return(
                        <div className="footer-contact" key={index}>
                            <div className="icon">{footerContact.icon}</div>
                            <div className="footer-contact-text">
                                <p>{footerContact.title}</p>
                                <p>{footerContact.details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </footer>
    );
}

export default Footers