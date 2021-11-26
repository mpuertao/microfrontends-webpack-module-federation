import React, {useState} from "react";

const AccountDetails = (props) => {
    
    const [lastPaymentDate, setPaymentChanged] = useState("Jan 2021")

    props.emitter.on("paymentChanged", date => setPaymentChanged(date))

    return (
        <div>
            <h3>Account Details</h3>
            <ul>
                <li><i>name:</i> Mao</li>
                <li><i>surname:</i> Puerta</li>
                <li><i>email:</i> maupuerta@bancolombia.com</li>
                <li><i>member since:</i> Nov 2019</li>
                <li><i>last payment changed: </i><strong>{lastPaymentDate}</strong></li>
                <li><a href="#">Change account details</a></li>
            </ul>
        </div>
    
    );
}

export default AccountDetails;
                