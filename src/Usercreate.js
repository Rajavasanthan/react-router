import React, { useContext, useState } from 'react'
import UserContext from './userContext';
import { useHistory } from "react-router-dom";
function Usercreate() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    let data = useContext(UserContext)
    let history = useHistory();

    let handleSubmit = () => {
        console.log({
            name,
            username,
            mobile,
            email
        })
        data.setUserData([...data.userData, {
            name,
            username,
            mobile,
            email
        }])
        console.log(data.userData)
        history.push("/user")
    }
    return (
        <div className="container">
            <h1>User Form</h1>

            <div className="row">
                <div className="col-lg-6">
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <label>Mobile</label>
                    <input type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" />
                </div>
                <div className="col-lg-6">
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <input className="btn btn-primary" type="submit" onClick={handleSubmit} />
                </div>
            </div>

        </div>
    )

}

export default Usercreate
