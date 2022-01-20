import "./Today.css";
import React, { useState, useEffect } from "react";
import Profile from '../Home/Profile';
import NavBar from '../NavBar/NavBar';
import NoBirthday from "../NoBirthday/NoBirthday";
import Loading from "../Loading/Loading";

const Today = () => {
    const aajDate=new Date().getDate();
    const aajMonth=new Date().getMonth();
    const [data, setData] = useState([]);
    const [loaded,setLoad]=useState(false);
    useEffect(() => {


        getsData();


    }, [])
    async function getsData() {
        await fetch("http://localhost:3001/getData").then(res =>

            res.json()
        )
            .then((json) => {
                console.log(json);
                var todayBirthday=json.filter((d)=>{
                    
                    return new Date(d.dob).getMonth()===aajMonth && new Date(d.dob).getDate()===aajDate;
                })
                setData(todayBirthday);
                setLoad(true);


            }).catch(e => {
                console.log('There has been a problem with your fetch operation: ' + e.message);
            });


    }



    if(!loaded)
    {
        return(<Loading/>)
    }
    else if (data.length===0 ) {
        return (<NoBirthday />)
    }
    
    return (
        <div className="body-container">
            <NavBar />
            <div className="container">
                <div className="Heading">
                    <h1>Birthdays Today</h1>
                </div>
                <div className="main-body">
                    {
                        data && data.map((d) => {


                            return (

                                <Profile key={d._id} name={d.name} gender={d.gender} dob={d.dob} relation={d.relation} />

                            );






                        })
                    }




                </div>
            </div>

        </div>

    )



}
export default Today;