import React,{useEffect, useState} from 'react';
import { addDetails } from '../../Redux/UserReducer';
import { useDispatch,useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import MainPage from '../MainPage';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const [storename, setStorename] = useState("");
  const [storegst, setStoregst] = useState("");
  const [pin, setPin] = useState("");
  const [pancard, setPancard] = useState("")
  const [aadhar, setAadhar] = useState("")
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleSubmit = ()=>{
    if(storename && storegst && pin && pancard  && aadhar !== ''){
        dispatch(addDetails({id: users[users.length-1].id + 1,storename,storegst,pin,pancard,aadhar}))
        setStorename('')
        setStoregst('')
        setPin('')
        setPancard('')
        setAadhar('')
        toast.success('Submitted Successfully')
        navigate('/ProdCard')
        }
        else{
            toast.error('Please fill the Details!!')
        }
    }
  return (
    <div>
        <MainPage/>

        <div>
           <div className="row">
            <div className="offset-lg-3 col-lg-6 mt-5" >
                    <div className="card">
                        <div className="card-header">
                            <h1>Store Registration</h1>
                        </div>
                        <div className="card-body">
                        <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Store Name: <span className="errmsg">*</span></label>
                                        <input type="email" value={storename} onChange={e => setStorename(e.target.value)} className="form-control" required></input>
                                    
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Store GST No: <span className="errmsg"></span></label>
                                        <input value={storegst} onChange={e => setStoregst(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Store PIN: <span className="errmsg">*</span></label>
                                        <input value={pin} onChange={e => setPin(e.target.value)} type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>PanCard<span className="errmsg">*</span></label>
                                        <input value={pancard} onChange={e => setPancard(e.target.value)} type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>AadharCard<span className="errmsg">*</span></label>
                                        <input value={aadhar} onChange={e => setAadhar(e.target.value)} type="text" className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="card-footer">
                            <button onClick={HandleSubmit}  type="submit" className="btn btn-primary">Register</button>
                        </div>
                        </div>
                        </div>      
                    </div>  
            </div>

    </div>

    </div>
  );
}

export default Dashboard;
