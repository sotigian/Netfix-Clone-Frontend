import "./credit.payment.scss";
import { useEffect, useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from "react-router-dom";
import PlanService from '../../services/plan_service';
import swal from '@sweetalert/with-react';
import AuthService from "../../services/auth_service";

const CreditPayment = ({ isDisplayed, setShowPlans, planId }) => {
    const nav = useNavigate();
    const [currentUser, setCurrentUser] = useState("")
    const [plans, setPlans] = useState("")
    useEffect(() => {
        setCurrentUser(AuthService.getCurrentUser());
        PlanService.readPlan().then(res => {
            setPlans(res.data.plans);            
        })

    }, [])
    //for vanilla bootstrap modal



    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(isDisplayed);
    }, [isDisplayed]);
    const handleClose = () => {
        setShowPlans(false)
        //setShow(false);
    }


    const submitPayment = () => {
        PlanService.buyPlan(currentUser, plans[planId - 1]).then(
            () => {
                swal({
                    title: "Plan bought successfully!",
                    text: "Watch now!",
                    icon: "success",
                    buttons: false,
                    timer: 1500,
                }).then(
                    () => {
                        nav('/');
                    }
                );
            }
        );
        //setShow(false);
        setShowPlans(false)
    };


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} centered >
                <Modal.Header closeButton>
                    <Modal.Title>{plans && `${plans[planId - 1]?.name} plan for ${plans[planId - 1]?.price} €`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PayPalButton
                        amount={plans[planId - 1]?.price}
                        currency="EUR"

                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {

                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={submitPayment}>
                        Pay Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreditPayment;