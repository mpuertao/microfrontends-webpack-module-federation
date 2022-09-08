import React from "react";

const PaymentDetails = (props) => {

    const onPaymentChanged = () => {
        props.emitter.emit("paymentChanged", document.getElementById('paymentdate').value);
    }

    return (
        <div>
            <h3>Payment Details</h3>
            <ul>
                <li><i>payment method: </i>credit card</li>
                {/* <li><a href="#" onClick={onPaymentChanged}>Change payment method to PayPal</a></li> */}
                <input type="text" id="paymentdate" name="paymentdate"/>
                {/* <input type="button" value="Change Payment Date" onClick={onPaymentChanged}/> */}
                <button onClick={onPaymentChanged}>Ingress Payment Date</button>
                <li><a href="#">View payments history</a>
                </li>
            </ul>
        </div>
    );
}

export default PaymentDetails;
                