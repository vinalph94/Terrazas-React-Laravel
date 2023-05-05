import React, {useEffect, useState} from "react";
import { BASE_URL, getCookie } from "../../config/config";
import axios from "axios";



function Subscriptions() {

  const [gardenbutton,setGardenbutton] = useState(false)
  const [poolbutton,setPoolbutton] = useState(false)
  const handlePoolClick = async () => {
    const data = {
      name: getCookie()["name"],
      resident_type: "resident",
      resident_id: getCookie()["id"],
    };
    try {
      const response = await axios.post(
        "/api/poolmanager/Resident_Pool_Request.php",
        data
      );
      console.log(response);
      alert("Request Sent")
    } catch (error) {
      console.error(error);
    }
  };

  const handleGardenClick = async () => {
    const data = {
      name: getCookie()["name"],
      resident_type: "resident",
      resident_id: getCookie()["id"],
    };
    try {
      const response = await axios.post(
        "/api/gardenmanager/Resident_Garden_Request.php",
        data
      );
      console.log(response);
      alert("Request Sent")
    } catch (error) {
      console.error(error);
    }
  };


  const handleGardenLeave = async () => {
    const data = {
      name: getCookie()["name"],
      resident_type: "resident",
      resident_id: getCookie()["id"],
    };
    try {
      const response = await axios.post(
        "/api/gardenmanager/Resident_Membership_Delete.php",
        data
      );
      console.log(response);
      fetchDataGarden();
      fetchDataPool();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePoolLeave = async () => {
    const data = {
      name: getCookie()["name"],
      resident_type: "resident",
      resident_id: getCookie()["id"],
    };
    try {
      const response = await axios.post(
        "/api/poolmanager/Resident_Membership_Delete.php",
        data
      );
      console.log(response);
      fetchDataGarden();
      fetchDataPool();
    } catch (error) {
      console.error(error);
    }
  };
  async function fetchDataGarden() {
   var resident_id= getCookie()["id"]

    axios
      .get("/api/gardenmanager/Resident_Garden_Fetch.php?filter="+ resident_id)
      .then((response) => {
        
        if(response.data.length==0){
          
          setGardenbutton(!true);
        }
        else{
          
          setGardenbutton(!false);
        }
  
        
       
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function fetchDataPool() {
    var resident_id= getCookie()["id"]
    
     axios
       .get("/api/poolmanager/Resident_Pool_Fetch.php?filter="+ resident_id)
       .then((response) => {
        

        if(response.data.length==0){
          
          setPoolbutton(!true);
        }
        else{
          
          setPoolbutton(!false);
        }
         
       })
       .catch((error) => {
         console.log(error);
       });
   }
  useEffect(() => {
    fetchDataGarden();
    fetchDataPool();
    

  }, []);
  return (
    <div className="profile-container">
      <style type="text/css">
        {`
              .profile-container {
                  padding: 24px;
                  margin: 24px;
                  min-height:90vh;
              }
      
              .container {
                  display: flex;
                  flex-wrap: wrap;
              }
      
              .box {
                  display: inline-block;
                  margin: 10px;
              }
              `}
      </style>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            flex: 0.3,
            display: "inline-block",
            marginBottom: "10px",
            paddingRight: "64px",
          }}
        >
          
        </div>

        <div
          className="bg-base-200 shadow-xl"
          style={{ flex: 1, marginLeft: "0px" }}
        >
          <h1 style={{ padding: "16px" }} className="text-3xl font-bold white">
            Available Clubs
          </h1>
          <div className="container">
            
            <div className="box">
              <div className="w-64 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Garden services</h2>
                  <p style={{ visibility: "hidden" }}>-</p>
                  { gardenbutton ? 
                    <a className="btn btn-primary" href="#" onClick={handleGardenLeave}>
                    Leave
                  </a>
                    
                    :
                    <a className="btn btn-primary" href="#" onClick={handleGardenClick}>
                    Join
                  </a>}
                  
                </div>
              </div>
            </div>


            <div className="box">
              <div className="w-64 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title white">Pool Services</h2>
                  <p style={{ visibility: "hidden" }}>-</p>

                  { poolbutton ? 
                    <a className="btn btn-primary" href="#" onClick={handlePoolLeave}>
                    Leave
                  </a>
                    
                    :
                    <a className="btn btn-primary" href="#" onClick={handlePoolClick}>
                    Join
                  </a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
