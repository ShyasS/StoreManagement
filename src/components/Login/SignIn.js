import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Sidebar from '../StoreDashboard/Sidebar/Sidebar';

const SignIn = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const navigate = useNavigate();
    const HandleSubmit = ()=>{
        if(username == '' && password == ''){
            toast.error('Please fill the details')
        }
        if(username == 'admin' && password == 'admin'){
           navigate('/Dashboard')
        }
        else{
            toast.error("Invalid Username or Password")
        }
    }
  return (
    <div>
        <div className="row">
    <div className="offset-lg-3 col-lg-4" style={{ margin:'140px auto' }}>
            <div className="card">
                <div className="card-header">
                    <h2 style={{textAlign:'center'}}> Login</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Email/Mobile No: <span >*</span></label>
                        <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control" fullwidth></input>
                    </div>
                    <div className="form-group">
                        <label>Password <span className="errmsg">*</span></label>
                        <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control" fullwidth></input>
                    </div>
                </div>
                    <button onClick={HandleSubmit}  type="submit"  className="btn col-lg-12 btn-primary " style={{borderRadius:'30px'}} >Sign-In</button>
                    <br></br> 
                    <p>Dont have any account <Link to={'/SignUp'}>Register</Link></p>
            </div>     
    </div>
</div>
    </div>
  );
}

export default SignIn;
