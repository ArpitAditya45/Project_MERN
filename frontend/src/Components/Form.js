
import { useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './css/Form.css'


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
    if(project_name===''){
      alert('Please enter a project name');
      return;
    }
    let data = {
      id: id,
      project_name: project_name,
    };
    Axios.post("https://project-management-final.onrender.com/task/create-project/" + id, data)
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
      const data_n={id:id,Project_Name:project_name,Members_Gmail:[]}
    console.log(data_n);
    // navigate(`/project/${value}`);
    Axios.post(`https://project-management-final.onrender.com/project/add-project/` + id,data_n)
    .then((res)=>{
      if(res.status==200){
         console.log("Project Created Successfully");
      }else{
        return Promise.reject();
      }

    }).catch((err)=>{
      console.log(err);
    })
      
  }
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Project Name</label>
          <input
            type="text"
            className="form-control"
            id="project_name"
            placeholder="Enter Project Name"
            onChange={(event) =>{
              setproject_name(event.target.value)
              
            } }
          />
          <button type="submit" className="btn btn-info" onClick={(event)=>{
            document.getElementById('project_name').value='';
          }}>
            Submit
          </button>
          <button type="button" class="btn btn-dark" onClick={change_page}>View Projects</button>
        </div>
      </form>
     
    </>
  );
}
export { Form };