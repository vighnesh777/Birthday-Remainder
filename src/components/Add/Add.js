import React, { useEffect, useState } from 'react';
import './Add.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
const Add = () => {
    var [name, setName] = useState("");
    var [gender, setGender] = useState("");
    var [relation, setRelation] = useState("");
    var [dob, setDob] = useState("");
    var [saved, setSaved] = useState(false);
    var [errors,setError]=useState(false);
    function handleClick(e) {
        e.preventDefault();
        var fm2 = document.getElementById("forms");
        const b = {
            header:{'Access-Control-Allow-Origin':"*"}
        };
        var message = document.getElementById("message");
        new FormData(fm2).forEach((value, key) => b[key] = value);
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.post('https://diaryservers.herokuapp.com/add',b)
            .then(response => {
                if (response.status === 200) { setSaved(true); }
            }).catch(error => {
                setError(true);
                console.error('There was an error!', error);
            });
    }
    if (saved && !errors) {
        return (


            
             <div>
             <NavBar />
 
 
             <div className='holders'>
             <div>
                <h1>Submitted Successfully</h1>
            </div>
                 <div className="container-holder">
                     <div className="login-container">
 
                         <div className="form-container">
 
 
                             <form id="forms" >
                                 <div className="signup-container ">
 
                                     <input type="text" name="Name" id="name" value={name}
                                         onChange={e => setName(e.target.value)} placeholder=" " autoComplete="off" />
                                     <label htmlFor="name">Name</label>
 
                                     <select name="Relation" id="relation" value={relation}
                                         onChange={e => setRelation(e.target.value)}>
                                         <option value="Friend" className="option">Friend</option>
                                         <option value="Bestie" className="option">Bestie</option>
                                         <option value="Buddy" className="option">Buddy</option>
                                         <option value="Relative" className="option">Relative</option>
                                     </select>
                                     <select name="Gender" id="gender" value={gender}
                                         onChange={e => setGender(e.target.value)}>
                                         <option value="Male" className="option">Male</option>
                                         <option value="Female" className="option">Female</option>
                                     </select>
                                     <input type="date" name="Dob" id="dob" placeholder=" " autoComplete="off" value={dob}
                                         onChange={e => setDob(e.target.value)} />
                                     <label htmlFor="dob" className='label'>Date Of Birth</label>
                                     <button className="signup-button" onClick={handleClick} type="submit" >Post</button>
                                 </div>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        )
 
 
    }
    else if(errors){
        return (


            
            <div>
            <NavBar />


            <div className='holders'>
            <div>
               <h1>Error posting the data,Try changing the Name!</h1>
           </div>
                <div className="container-holder">
                    <div className="login-container">

                        <div className="form-container">


                            <form id="forms" >
                                <div className="signup-container ">

                                    <input type="text" name="Name" id="name" value={name}
                                        onChange={e => setName(e.target.value)} placeholder=" " autoComplete="off" />
                                    <label htmlFor="name">Name</label>

                                    <select name="Relation" id="relation" value={relation}
                                        onChange={e => setRelation(e.target.value)}>
                                        <option value="Friend" className="option">Friend</option>
                                        <option value="Bestie" className="option">Bestie</option>
                                        <option value="Buddy" className="option">Buddy</option>
                                        <option value="Relative" className="option">Relative</option>
                                    </select>
                                    <select name="Gender" id="gender" value={gender}
                                        onChange={e => setGender(e.target.value)}>
                                        <option value="Male" className="option">Male</option>
                                        <option value="Female" className="option">Female</option>
                                    </select>
                                    <input type="date" name="Dob" id="dob" placeholder=" " autoComplete="off" value={dob}
                                        onChange={e => setDob(e.target.value)} />
                                    <label htmlFor="dob" className='label'>Date Of Birth</label>
                                    <button className="signup-button" onClick={handleClick} type="submit" >Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
    }
    return (
        <div>
            <NavBar />


            <div className='holders'>
                <div className="container-holder">
                    <div className="login-container">

                        <div className="form-container">


                            <form id="forms" >
                                <div className="signup-container ">

                                    <input type="text" name="Name" id="name" value={name}
                                        onChange={e => setName(e.target.value)} placeholder=" " autoComplete="off" />
                                    <label htmlFor="name">Name</label>

                                    <select name="Relation" id="relation" value={relation}
                                        onChange={e => setRelation(e.target.value)}>
                                        <option value="Friend" className="option">Friend</option>
                                        <option value="Bestie" className="option">Bestie</option>
                                        <option value="Buddy" className="option">Buddy</option>
                                        <option value="Relative" className="option">Relative</option>
                                    </select>
                                    <select name="Gender" id="gender" value={gender}
                                        onChange={e => setGender(e.target.value)}>
                                        <option value="Male" className="option">Male</option>
                                        <option value="Female" className="option">Female</option>
                                    </select>
                                    <input type="date" name="Dob" id="dob" placeholder=" " autoComplete="off" value={dob}
                                        onChange={e => setDob(e.target.value)} />
                                    <label htmlFor="dob" className='label'>Date Of Birth</label>
                                    <button className="signup-button" onClick={handleClick} type="submit" >Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Add;