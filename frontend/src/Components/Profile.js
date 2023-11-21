import Nav from "../Pages/Nav";
import { useNavigate, useParams } from "react-router-dom";
import '../Components/css/Profile.css';
import per from '../Components/icons/prof.jpg';
import Axios from 'axios';
import { useEffect, useState} from "react";

function Profile() {
    const [data, set_data] = useState([]);
    const [flag, setflag] = useState(false);
    const navigate = useNavigate();
    const {id}=useParams();
   console.log(id);

    const handleBack = () => {
        // Replace '/temp' with the appropriate path
        navigate('/User-Dashboard/'+id);
    }
    function get_data() {
        Axios.get("https://project-management-final.onrender.com/api/user-get/"+id)
        .then((res) => {
            if(res.status===200){
                set_data(res.data);
                console.log(res.data);
            }else{
                return Promise.reject;
            }

        })
        .catch((err) => {alert(err)});
        
    }
    useEffect(()=>{
        get_data();
    },[]);

    function List(){
        return (
            <>
             <h2>Name:{data[0].last_name}</h2>
             <h4>Email: {data[0].email}</h4>
            </>
        )
    }


    return (
        <>
            <div style={{ padding: '30px', display: 'flex' }}>
                <div style={{ padding: '30px' }}>
                    <hr class="line" />
                    <label style={{ fontSize: '30px' }}>Profile</label>
                    <div className="BackButton">
                    <button onClick={handleBack} className="btn btn-outline-secondary" style={{display:"flex", justifyContent:"center", alignItems:"center" }}>Back</button>
                    </div><div className="profile-box">
                        <div className="img-profile"><img src={per} alt="Profile Picture"></img></div>
                        <div className="desc-profile">
                           <button className="btn btn-info" onClick={()=>setflag(true)}>Show detatils</button>
                           {flag && List()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Profile };
