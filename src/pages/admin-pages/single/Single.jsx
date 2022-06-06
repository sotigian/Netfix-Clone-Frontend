import "./single.scss"
import Sidebar from "../../../components/admin-components/sidebar/Sidebar"
import NavbarAdmin from "../../../components/admin-components/navbar-admin/Navbar-admin"
import { useEffect, useState } from "react"
import UserService from "../../../services/user_service"
import PlanService from "../../../services/plan_service"

function Single() {
  const [currentUser, setCurrentUser] = useState();
  const [orderedPlans, setOrderedPlans] = useState();
  useEffect(() => {
    let param = window.location.pathname.split("/")[3]
    UserService.getOneUser(param).then(res => {
      setCurrentUser(res);
      console.log(res)
    })
    PlanService.getUserPlan(param).then(res => {
      setOrderedPlans(res.data.orderedPlans);
      console.log(res.data.orderedPlans)
    })
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <NavbarAdmin />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{currentUser && `${currentUser.firstName} ${currentUser.lastName}`}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">{currentUser && `${currentUser.email}`} </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">6978466328</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Tsirligkou 3, Agios Dimitrios, Athens</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Greece</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="userDetails">
              <h1 className="membersince">
                <p>Member Since:</p>
                <span className="memberDate">{currentUser && `${new Date(currentUser.createdAt).toLocaleDateString()}`} </span>
                <p>Time Registered:</p>
                <span className="memberTime">{currentUser && `${new Date(currentUser.createdAt).toLocaleTimeString()}`} </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="bottom">
          {orderedPlans && (new Date(orderedPlans[orderedPlans.length - 1]?.expiresAt) > new Date()) ? <><div className="plan-activation">This user has an active plan which expires at {new Date(orderedPlans[orderedPlans.length - 1]?.expiresAt).toLocaleDateString()}</div>


          <div className="container-fluid">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ON</th>
                <th scope="col">Plan Name</th>
                <th scope="col">Plan Price</th>
                <th scope="col">Plan Purchase Date</th>
                <th scope="col">Plan Expiration Date</th>
              </tr>
            </thead>
            <tbody>
              {
                orderedPlans && orderedPlans.map((plan, index) => {
                  return <tr scope="col" key={plan.id}>
                        <td>{index + 1}</td>
                    <td>{currentUser && orderedPlans && currentUser.Plans[currentUser.Plans.findIndex(x => x.id === plan.PlanId)].name}</td>
                        <td>{plan.pricePaid}</td>
                        <td>{new Date(plan.createdAt).toLocaleDateString()}</td>
                        <td>{new Date(plan.expiresAt).toLocaleDateString()}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
          </div>
          </> : <div>This user has no active plan</div>}
        </div>
      </div>
    </div>
  )
}

export default Single;