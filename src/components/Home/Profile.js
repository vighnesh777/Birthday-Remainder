import "./Home.css";
import React from "react";
import maleAvatar from '../../assets/male-avatar.gif';
import femaleAvatar from '../../assets/female-avatar.gif';
const Profile=({name,gender,dob,relation})=>
{
    const month={"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September","10":"October","11":"November","12":"December"};
    var date=dob.substring(8);
    var month_=dob.substring(5,7);
    var year=dob.substring(0,4)
    
    return(
        <div className="banner">
                <div className="imagePart">
                    <img src={gender==="Male"?maleAvatar:femaleAvatar} alt="Prof-Pic"></img>
                </div>
                <div className="text-content">
                    <div className="name">
                        <p className="name1">{name} <span className="relation">{relation}</span></p>
                    </div>
                    <div className="dateofbirth">
                        <p className="dob">{date+","+month[month_]+","+year}</p>
                    </div>
                </div>
            </div>
    )
}
 export default Profile;