import React, { useState, useEffect } from "react";
import "./style/memberList.scss";
import Member from "../components/Member";
import axios from "axios";
import Pagination from "./Pagination";
import { useNavigate } from "react-router";

function MemberList() {

    const navigate = useNavigate();
    const directToCreateMember = () => {
    navigate("/create-member");
    };

  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setMembers(response.data.data);
    });
  }, []);

  return (
    <>
      <section className="memberList">
        <h2>All Members</h2>
        <button 
        type="button" 
        className="memberList--newMemberButton"
        onClick={()=>directToCreateMember()}
        >
          Create New Member
        </button>
        <div className="memberlist--members">
          {members.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </div>
      </section>
      <Pagination />
    </>
  );
}

export default MemberList;


