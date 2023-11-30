import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, passwordchange] = useState("")
  const HandleSubmit = ()=>{

        if(email == ''){
      toast.error('Email is required',{
        position: toast.POSITION.TOP_RIGHT,
      })
    }
    // if(email !== "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/" && email !== ''){
    //   toast.error('Invalid Email address',{
    //     position: toast.POSITION.TOP_RIGHT,
    //   })
    // }
    if(phone == ''){
      toast.error('Phone number is required',{
        position: toast.POSITION.TOP_RIGHT,
      })
    }
    if(password !== confirmPassword){
      toast.error('Passwords do not match',{
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  if(confirmPassword == ''){
    toast.error('Please confirm your Password',{
      position: toast.POSITION.TOP_RIGHT,
    })
  }
  if(password == ''){
    toast.error('Please enter a valid password',{
      position: toast.POSITION.TOP_RIGHT,
    })
  }
}
  

  return (
    <div>
           <div className="row">
            <div className="offset-lg-4 col-lg-4"  style={{ margin:'100px auto' }}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input type="email" value={email} onChange={e => emailchange(e.target.value)} className="form-control" required></input>
                                    
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Confirm Password<span className="errmsg">*</span></label>
                                        <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                            <button onClick={HandleSubmit} type="submit" className="btn btn-primary">Register</button> 
                            <Link to={'/'} style={{margin:'0 10px'}} className="btn btn-danger">Close</Link>
                        </div>
                        </div>      
                    </div>  
            </div>

    </div>

  );
}

export default SignUp;
