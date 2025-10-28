import { Component } from "react";


export class StudentProfileCard extends Component {
    render() {
        return <>

            <div style={{ width: "15rem", height: "20rem", borderRadius: "10%", backgroundColor: "orange", textAlign: "center",boxShadow:"0px 0px 10px black",marginTop:"30px",paddingTop:"10px"}}>
                <p> Student Identity Card</p>
                <img src={this.props.img} height="80px" alt="" style={{ borderRadius: "10px" }} />
                <h3>Name: {this.props.name}</h3>
                <h4>Age: {this.props.age}</h4>
                <h4>Branch: {this.props.Course}</h4>
                <h4>Roll no: {this.props.roll}</h4>
            </div>

        </>
    }
}




export  function UserProfile({user}){
        return (
            <div style={{height:"20rem",width:"16rem",textAlign:"start",lineHeight:"30px",paddingLeft:"10px",backgroundColor:"lime",boxShadow:"0px 0px 10px black",borderRadius:'30px',paddingTop:"10px",paddingBottom:"10px",marginTop:"30px"}}>
                <h2 style={{textAlign:"center"}}>PROFILE</h2>
                <h3>Name:{user.name}</h3>
                <h3>email:{user.email}</h3>
                <h3>Hobbies:</h3>
                <ul>
                    {user.hobbies.map((value,index)=> <div key={index}>
                        <li>{value}</li>
                    </div> )}
                </ul>
            </div>



        )
    }
