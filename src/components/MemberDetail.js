import React,{useEffect} from "react";
import { useNavigate } from "react-router";
import Member from "./Member";

function MemberDetail({member}) {
    const navigate = useNavigate();
    const directToMainPage = () => {
    navigate("/");
    };
    
    useEffect(() => {
       console.log("üye detay sayfası",member)
    }, [])

    


  return (
    <div className="member-detail">
      { <img src={member.avatar} className="member-detail--img" alt="member" /> }
      { <span className="member-detail--name">
        {member.first_name} {member.last_name}{" "}
      </span> }
      { <span className="member-detail--mail">{member.email}</span> }
      <Member member={member}/>
      <button
        className="member-detail--backButton"
        onClick={() => directToMainPage()}
      >
        Back
      </button>
    </div>
  );
}

export default MemberDetail;

/// tıklanan memberı state ile tutup göndericez