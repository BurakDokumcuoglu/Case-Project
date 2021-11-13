import React,{useState} from 'react'
import "./style/member.scss"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Member({member}) {

    const navigate = useNavigate();

    const [selectedMember, setSelectedMember] = useState()

    const directToMemberDetail = (member) => {
    setSelectedMember(member)
    axios.get("https://reqres.in/api/users/"+member.id)
    navigate("/member-detail",{member:selectedMember});

    console.log("selectedMember",selectedMember)
    };

    return (
        <div className="member">
            <img src={member.avatar} className="member--img" alt="member"/>
            <span className="member--name">{member.first_name} {member.last_name} </span>
            <span className="member--mail">{member.email}</span>
            <button 
            className="member--reviewButton"
            // onClick={()=>directToMemberDetail(member)}
            >
                Review
            </button>
        </div>
    )
}

export default Member
