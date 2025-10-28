import { Component } from "react";
import { StudentProfileCard, UserProfile } from "./components/studentcard";
import img1 from "../src/components/images/img1.jpg"
import img2 from "../src/components/images/img2.jpg"
import img3 from "../src/components/images/img3.jpg"
import img4 from "../src/components/images/img4.jpg"
import img5 from "../src/components/images/img5.jpg"

export class App extends Component {
  render() {
    return <>
      <h2 style={{ textAlign: "center", marginRight: "40px", backgroundColor: "skyblue", height: "40px", width: "25rem", marginLeft: "35rem", borderRadius: "10px", boxShadow: "0px 0px 8px black" }}>Student Cards</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "30px",backgroundColor:"smokewhite",height:"400px",borderRadius:"20px",boxShadow: "0px 0px 8px black" }}>
        <div>
          <StudentProfileCard name="K.Raju" Course="React" age={21} roll={231} img={img2} />
        </div>
        <div>
          <StudentProfileCard name="S.Harshitha" Course="Node.js" age={22} roll={260} img={img1} />
        </div>
        <div>
          <StudentProfileCard name="M.Pradeepika" Course="Mern Stack" age={20} roll={240} img={img3} />
        </div>
        <div>
          <StudentProfileCard name="B.Manikanta" Course="Java Full-Stack" age={23} roll={210} img={img4} />
        </div>
        <div>
          <StudentProfileCard name="U.Sivamani" Course="Python Full-Stack" age={21} roll={263} img={img5} />
        </div>

      </div>
    </>
  }
}


export function Profile() {
  const user = {
    name: "K.Raju",
    email: "alice@gmail.com",
    hobbies: ["Reading", "Coding", "Travelling"]
  };
  return <>
    <h2 style={{ textAlign: "center", marginRight: "40px", backgroundColor: "yellow", height: "40px", width: "25rem", marginLeft: "35rem", borderRadius: "10px", boxShadow: "0px 0px 8px black",marginTop: "250px" }}>Profile Card</h2>
    <div style={{ display:"flex",justifyContent:"space-evenly",borderRadius:"20px",marginTop:"40px",backgroundColor:"smokewhite",height:"400px",borderRadius:"30px",boxShadow: "0px 0px 8px black"}}>
      <div>
        <UserProfile user={user} />
      </div>
      <div>
        <UserProfile user={user} />
      </div>
      <div>
        <UserProfile user={user} />
      </div>
      <div>
        <UserProfile user={user} />
      </div>
      <div>
        <UserProfile user={user} />
      </div>

    </div>
    </>
  
}