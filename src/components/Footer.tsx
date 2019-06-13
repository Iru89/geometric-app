import * as React from 'react';
import logo_upc from "../logo_upc.png";

const Footer: React.FunctionComponent = () => (
    <div>
        <p>TFG of telematics systems: Study of authentication mechanisms for distributed applications</p>
        <img src={logo_upc} width={100} height={100}/>
    </div>
);

export default Footer;