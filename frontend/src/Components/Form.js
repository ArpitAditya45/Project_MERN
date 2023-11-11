import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Form() {
  let { id } = useParams();
  const [arr, setarr] = useState([]);
  const [project_name, setproject_name] = useState("");
  const navigate = useNavigate();
  const change_page=()=>{
    navigate("/Project-List/"+id);

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const new_arr = [project_name];
    setarr(new_arr);
    console.log(arr);
    let data = {
      id: id,
      project_name: project_name,
    };
    Axios.post("http://localhost:4000/task/create-project/" + id, data)
      .then((res) => {
        if (res.status === 244) {
          alert("Project name is already registered");
        } else if (res.status === 200) {
          console.log(arr);//Debugging Line remove it in production
          alert("Project created successfully");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div class="navbar">
    <img src="logo.png" alt="TaskHub"/>
    <h2>~~ Welcome User, Start Your Journey !! ~~</h2>
    <h1>TaskHub</h1>
  </div>
            <div class="center-container">

              <div class="input-section">
                <img style={{"width":"100px"}} src="left.png" alt="Right Image"/>
                <p class="pdesc" for="projectName">
                  Streamlining Tasks, 
                Boosting Efficiency, and 
                Achieving Goals with Project Management</p><br/>
                <label class="pname" for="projectName">PROJECT NAME</label><br/>
                <input style={{"width":"700px"}}type="text"  id="project_name" onChange={(event) => setproject_name(event.target.value)} placeholder="Enter project name"/>
                  <br/>
                  <br/>
                  <button class="b1" type="submit">Submit</button>
                  <button  class="b2" type="button" onClick={change_page}>View Projects</button>
              </div>
                  
            </div>
      </form>
      
    </>
  );
}
export { Form };
