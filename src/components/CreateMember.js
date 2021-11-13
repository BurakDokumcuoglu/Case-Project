import React,{ useState,useEffect} from 'react';
import "./style/createMember.scss"
import { useNavigate } from "react-router";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function CreateMember() {

    const navigate = useNavigate();
    const directToMainPage = () => {
    navigate("/");
    };

    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    useEffect(() => {
        var memberInfo = {name:"",job:""}
        memberInfo.name=name
        memberInfo.job=job
     }, [name,job])

     const handleCreateMember = ()=>{
         if (name!=="" && job!=="") {
            var result=axios.post("https://reqres.in/api/users",{name,job})
            toast.success("Your account has been created successfully.")
            setTimeout(() => {
                directToMainPage()
                // kullanıcıya çıkan toast'ı okuması için zaman verip anasayfaya yönlendiriyorum
            }, 3000);
            
           // console.log(result) işlem başarılı olarak console'da gözüküyor
         }else{
            toast.error("Name and job cannot be empty")
         }
    }

    return (
        <div className="createMember">
            <ToastContainer/>
            <form className="createMember--form">
                <div className="createMember--form--heading">Create Member</div>
                <input name="name"
                placeholder="name" 
                className="createMember--form--input"
                onChange={e=>setName(e.target.value)}
                />
                <input 
                placeholder="job" 
                className="createMember--form--input" 
                onChange={e=>setJob(e.target.value)}
                />
                <button 
                type="submit"
                className="createMember--form--button"
                 onClick={(e)=>{
                    e.preventDefault() 
                    handleCreateMember()}}
                >
                Create
                </button>
                <button
                className="createMember--form--button"
                onClick={()=>directToMainPage()}>
                Back
                </button>

            </form>
        </div>
    )
}

export default CreateMember
