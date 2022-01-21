import "./Home.css";
import React from "react";
import Loading from "../Loading/Loading";
import Profile from './Profile';
import NoBirthday from '../NoBirthday/NoBirthday';

class Card extends React.Component{
    state = {data:[],isLoaded:false};
    
    componentDidMount() {
        let options={

            headers: { 'Content-Type': 'application/json',
        "Access-Control-Allow-Origin":"*"},
        }
        // setTimeout(() => {
        //     this.setState({ showModal: true });
        // }, 1400);
        fetch("https://diaryservers.herokuapp.com/getData",options).then((res) =>
        {if(!res.ok){
            this.setState({
                data:[],
            });
            throw new Error(`HTTP error! status: ${res.status}`);
            
        }
        else 
        {
            return res.json();
        }
    })
        .then((json) => {
            this.setState({
                data: json,
                isLoaded:true,
            });
            console.log(this.state.data);
        }).catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
          });
       
          
    }
    render(){
        if(!this.state.isLoaded)
        {
            return(<Loading/>)
        }
        else if(this.state.data.length===0 && this.state.isLoaded)
        {
            return(<NoBirthday heading={"this Year yet"}/>)
        }
        return(

            <div className="body-container">
                
        <div className="container">
                <div className="Heading">
                    <h1>Birthdays This Year</h1>
                </div>
                <div className="main-body">
                {
                    this.state.data && this.state.data.map((d)=>{
                            return(
                                <Profile key={d._id}name={d.name} gender={d.gender} dob={d.dob} relation={d.relation}/>
                             )
                        })
                    
                }
                   
                
                    
                    
                   
                </div>
            </div>
        
            </div>
            
        )
    }

}
export default Card;