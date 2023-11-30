import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MainPage from "../MainPage";

const ProdCard = () => {
    const users = useSelector((state) => state.users);
  return (
    <div>
         <MainPage/>
 <div className="row">
            <div className="offset-lg-2 col-lg-10 mt-5 " >
        <table class="table table-striped w-100">
          <thead>
            <tr>
              <th>ID</th>
              <th>Store Name</th>
              <th>Store PIN</th>
              <th>PanCardNo:</th>
              <th>AadharNo:</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=>
                <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.storename}</td>
                <td>{user.pin}</td>
                <td>{user.pancard}</td>
                <td>{user.aadhar}</td>
                   <td></td>
              </tr>
                )
            }
          </tbody>
        </table>

        </div>
    </div>
    </div>
  );
}

export default ProdCard;
