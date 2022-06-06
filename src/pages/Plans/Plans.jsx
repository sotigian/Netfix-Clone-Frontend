import { Link, useNavigate } from 'react-router-dom';
import { GoX } from "react-icons/go";
import { GoCheck } from "react-icons/go";
import { useState, useRef, useEffect } from "react";
import swal from '@sweetalert/with-react';
import PlanService from '../../services/plan_service';
import AuthService from "../../services/auth_service";
import "./plans.scss"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import CreditPayment from '../../components/credit-payment/credit.payment';
import { PayPalButton } from "react-paypal-button-v2";
import { Modal, Button, Form } from "react-bootstrap";
import { SettingsPhoneTwoTone } from '@material-ui/icons';



const Plans = () => {
    const [currentUser, setCurrentUser] = useState("")
    const [plans, setPlans] = useState("")
    const [planId, setPlanId] = useState();
    const nav = useNavigate();  //redirect 
    const [show, setShow] = useState(false);
    useEffect(() => {
        setCurrentUser(AuthService.getCurrentUser());
        PlanService.readPlan().then(res => {
            setPlans(res.data.plans);
        })

    }, [])

    const handlePlan = (e) => {
        console.log(show);
        setShow(true);
        setPlanId(e.target.id);
    }


    return (
        <div>
        <Navbar />
            <div className="planWrapper">
                <div className="subWrapper">
                    <h1>Choose one plan and watch everything on Codeflix.</h1>
                </div>
                <br />
                <div className="planTable">
                    <thead>
                        <tr>
                            <th></th>
                            {/* map 49-51 
                        {movies && movies.map((movie, index) => {
                            return (
                                <div className="col" key={movie.id}>
                                    <div className="card shadow-sm" >
                                        <ListItem props={movie} ></ListItem>
                                    </div>
                                </div>
                            )
                        })
                        }*/}
                            <th id="1" onClick={handlePlan} className="basic">Basic</th>
                            <th id="2" onClick={handlePlan} className="standard">Standard</th>
                            <th id="3" onClick={handlePlan} className="premium">Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Duration</td>
                            <td>1 month</td>
                            <td>6 months</td>
                            <td>12 months</td>
                        </tr>
                        <tr>
                            <td>Total price</td>
                            <td>6.99€</td>
                            <td>35.99€</td>
                            <td>59.99€</td>
                        </tr>
                        <tr>
                            <td>HD available</td>
                            <td><GoX /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>Ultra HD available</td>
                            <td><GoX /></td>
                            <td><GoX /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>Screens you can watch on at the same time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Watch on your laptop, TV, phone and tablet</td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>Unlimited movies and TV shows</td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>Cancel anytime</td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>First month free</td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                    </tbody>
                </div>
                <br />
                <br />

            </div>
            <Footer />
            <CreditPayment isDisplayed={show} setShowPlans={setShow} planId={planId} />
        </div>
    )
}

export default Plans;