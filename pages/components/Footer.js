import { Fragment } from "react";
import style from '../../styles/app.module.css';

const Footer = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-9">
                    <h3>Info</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis debitis aliquid odit eligendi quibusdam omnis est architecto unde amet soluta nobis beatae saepe tenetur, adipisci earum minus? Sequi, consequatur!
                    </p>
                </div>
                <div className="col-md-3">
                    <h3>Contact Me</h3>
                    <article>
                        <i className={`bi bi-instagram ${style.bi}`}></i>
                        <i className={`bi bi-twitter ${style.bi}`}></i>
                        <i className={`bi bi-facebook ${style.bi}`}></i>
                        <i className={`bi bi-linkedin ${style.bi}`}></i>
                    </article>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Footer;