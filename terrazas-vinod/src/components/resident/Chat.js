import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../../config/config";

function Chat() {
  const [user, setUser] = useState({});

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const roles = [
    "resident",
    "super-admin",
    "garden-manager",
    "pool-manager",
    "security-manager",
  ];

  const [selectedUser, setSelectedUser] = useState({});

  const handleSelectedUser = function (u) {
    setSelectedUser(u);
    setMessages([])
    
    fetchMessages(u.id);


    
  };

  function fetchMessages(id){
    axios
      .post("/api/get_all_messages/", {
        incoming_id: id,
        outgoing_id: getCookie()["id"],
      })
      .then((data) => {
        setMessages(data.data);
      });
  }

  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    
    // Handle sending message logic
    // ...


    axios
    .post("/api/add_message", {
      incoming_msg_id: selectedUser.id,msg:message,
      outgoing_msg_id: getCookie()["id"]
    })
    .then((data) => {
      setMessage("")
      fetchMessages(selectedUser.id);

    });



  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/users/get_all_admins");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="outer-container">
      <div className="wrapper box">
        <style>
          {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
        .outer-container{
          display: flex;
  justify-content: space-between;
        }
        .box{
          width: 20%;
  height: 100px;
  background-color: blue;
        }
        .wrapper{
          color:#000;
          min-height:100vh;
          background: #fff;
          
          width: 100%;
          
          box-shadow: 0 0 128px 0 rgba(41, 40, 40, 0.1),
                      0 32px 64px -48px rgba(22, 22, 22, 0.5);
        }
        
        /* Login & Signup Form CSS Start */
        .form{
          padding: 25px 30px;
        }
        .form header{
          font-size: 25px;
          font-weight: 600;
          padding-bottom: 10px;
          border-bottom: 1px solid #e6e6e6;
        }
        .form form{
          margin: 20px 0;
        }
        .form form .error-text{
          color: #721c24;
          padding: 8px 10px;
          text-align: center;
          border-radius: 5px;
          background: #f8d7da;
          border: 1px solid #f5c6cb;
          margin-bottom: 10px;
          display: none;
        }
        .form form .name-details{
          display: flex;
        }
        .form .name-details .field:first-child{
          margin-right: 10px;
        }
        .form .name-details .field:last-child{
          margin-left: 10px;
        }
        .form form .field{
          display: flex;
          margin-bottom: 10px;
          flex-direction: column;
          position: relative;
        }
        .form form .field label{
          margin-bottom: 2px;
        }
        .form form .input input{
          height: 40px;
          width: 100%;
          font-size: 16px;
          padding: 0 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        .form form .field input{
          outline: none;
        }
        .form form .image input{
          font-size: 17px;
        }
        .form form .button input{
          height: 45px;
          border: none;
          color: #fff;
          font-size: 17px;
          background: #282727;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 13px;
        }
        .form form .field i{
          position: absolute;
          right: 15px;
          top: 70%;
          color: #ccc;
          cursor: pointer;
          transform: translateY(-50%);
        }
        .form form .field i.active::before{
          color: #333;
          contentt: "\f070";
        }
        .form .link{
          text-align: center;
          margin: 10px 0;
          font-size: 17px;
        }
        .form .link a{
          color: #333;
        }
        .form .link a:hover{
          text-decoration: underline;
        }
        
        
        /* Users List CSS Start */
        .users{
          padding: 25px 30px;
        }
        .users header,
        .users-list a{
          display: flex;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #52109e;
          justify-contentt: space-between;
        }
        .wrapper img{
          object-fit: cover;
          border-radius: 50%;
        }
        .users header img{
          height: 50px;
          width: 50px;
        }
        :is(.users, .users-list) .contentt{
          display: flex;
          align-items: center;
        }
        :is(.users, .users-list) .contentt .details{
          color: #c4c4c4;
          margin-left: 20px;
        }
        :is(.users, .users-list) .details span{
          font-size: 18px;
          font-weight: 500;
        }
        .users header .logout{
          display: block;
          background: #52109e;
          color: #fff;
          outline: none;
          border: none;
          padding: 10px 25px;
          text-decoration: none;
          border-radius: 10px;
          font-size: 17px;
        }
        .users .search{
          margin: 20px 0;
          display: flex;
          position: relative;
          align-items: center;
          justify-contentt: space-between;
        }
        .users .search .text{
          font-size: 18px;
          color: #c4c4c4;
        }
        .users .search input{
          position: absolute;
          height: 42px;
          width: calc(100% - 50px);
          font-size: 16px;
          padding: 0 13px;
          border: 1px solid #52109e;
          outline: none;
          border-radius: 5px 0 0 5px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        .users .search input.show{
          opacity: 1;
          pointer-events: auto;
        }
        .users .search button{
          position: relative;
          z-index: 1;
          width: 47px;
          height: 42px;
          font-size: 17px;
          cursor: pointer;
          border: none;
          background: #52109e;
          color: #cecece;
          outline: none;
          border-radius: 0 5px 5px 0;
          transition: all 0.2s ease;
        }
        .users .search button.active{
          background: #7843af;
          color: #52109e;
        }
        .search button.active i::before{
          contentt: '\f00d';
        }
        .users-list{
          max-height: 350px;
          overflow-y: auto;
        }
        :is(.users-list, .chat-box)::-webkit-scrollbar{
          width: 0px;
        }
        .users-list a{
          padding-bottom: 10px;
          margin-bottom: 15px;
          padding-right: 15px;
          border-bottom-color: #52109e;
        }
        .users-list a:last-child{
          margin-bottom: 0px;
          border-bottom: none;
        }
        .users-list a img{
          height: 40px;
          width: 40px;
        }
        .users-list a .details p{
          color: #f2f2f6;
        }
        .users-list a .status-dot{
          font-size: 12px;
          color: #468669;
          padding-left: 10px;
        }
        .users-list a .status-dot.offline{
          color: #ccc;
        }
        
        /* Chat Area CSS Start */
        .chat-area header{
          display: flex;
          color:white;
          background:green;
          align-items: center;
          padding: 28px 50px;
        }
        .chat-area header .back-icon{
          color: #52109e;
          font-size: 18px;
        }
        .chat-area header img{
          height: 45px;
          width: 45px;
          margin: 0 15px;
        }
        .chat-area header .details span{
          font-size: 17px;
          font-weight: 500;
          color: rgb(239, 234, 234);
        }
        .chat-box{
          position: relative;
          min-height: 500px;
          max-height: 500px;
          overflow-y: auto;
          padding: 10px 30px 20px 30px;
          background: #ccc;
          box-shadow: inset 0 32px 32px -32px rgb(0 0 0 / 5%),
                      inset 0 -32px 32px -32px rgb(0 0 0 / 5%);
        }
        .chat-box .text{
          position: absolute;
          top: 45%;
          left: 50%;
          width: calc(100% - 50px);
          text-align: center;
          transform: translate(-50%, -50%);
        }
        .chat-box .chat{
          margin: 15px 0;
        }
        .chat-box .chat p{
          word-wrap: break-word;
          padding: 8px 16px;
          box-shadow: 0 0 32px rgba(90, 86, 86, 0.08),
                      0rem 16px 16px -16px rgb(0 0 0 / 10%);
        }
        .chat-box .outgoing{
          display: flex;
        }
        .chat-box .outgoing .details{
          margin-left: auto;
          max-width: calc(100% - 130px);
        }
        .outgoing .details p{
          background: #52109e;
          color: #fafafa;
          border-radius: 18px 18px 0 18px;
        }
        .chat-box .incoming{
          display: flex;
          align-items: flex-end;
        }
        .chat-box .incoming img{
          height: 35px;
          width: 35px;
        }
        .chat-box .incoming .details{
          margin-right: auto;
          margin-left: 10px;
          max-width: calc(100% - 130px);
        }
        .incoming .details p{
          background: #767575;
          color: #e8e4e4;
          border-radius: 18px 18px 18px 0;
        }
        .typing-area{
          padding: 18px 30px;
          display: flex;
          justify-contentt: space-between;
        }
        .typing-area input{
          color: white;
                    height: 45px;
          width: calc(100% - 58px);
          font-size: 16px;
          padding: 0 13px;
          border: 1px solid #646262;
          outline: none;
          border-radius: 5px 0 0 5px;
        }
        .typing-area button{
          color: #d7d7d792;
          width: 55px;
          border: none;
          outline: none;
          background: #333;
          font-size: 19px;
          cursor: pointer;
          opacity: 0.7;
          pointer-events: none;
          border-radius: 0 5px 5px 0;
          transition: all 0.3s ease;
        }
        .typing-area button.active{
          opacity: 1;
          
        }
        .user:hover{
          background-color: #d7d7d792;
        }
        
        /* Responive media query */
        @media screen and (max-width: 450px) {
          .form, .users{
            padding: 20px;
          }
          .form header{
            text-align: center;
          }
          .form form .name-details{
            flex-direction: column;
          }
          .form .name-details .field:first-child{
            margin-right: 0px;
          }
          .form .name-details .field:last-child{
            margin-left: 0px;
          }
        
          .users header img{
            height: 45px;
            width: 45px;
          }
          .users header .logout{
            padding: 6px 10px;
            font-size: 16px;
          }
          :is(.users, .users-list) .contentt .details{
            margin-left: 15px;
          }
        
          .users-list a{
            padding-right: 10px;
          }
        
          .chat-area header{
            padding: 15px 20px;
          }
          .chat-box{
            background-color:#fff;
            min-height: 400px;
            padding: 10px 15px 15px 20px;
          }
          .chat-box .chat p{
            font-size: 15px;
          }
          .chat-box .outogoing .details{
            max-width: 230px;
          }
          .chat-box .incoming .details{
            max-width: 265px;
          }
          .incoming .details img{
            height: 30px;
            width: 30px;
          }
          .chat-area form{
            padding: 20px;
          }
          .chat-area form input{
            height: 40px;
            width: calc(100% - 48px);
          }
          .chat-area form button{
            width: 45px;
          }
        }
        .right{
          padding
          color:#000;
          width:100%;
          min-width:1000px;
          min-height:100vh;

        }
        .details{
          background-color:aliceblue;
          color:#000;
        }

        `}
        </style>
        <section className="users">
          <header>
            <div className="contenttt">
              <img
                src={`https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg`}
                alt=""
              />
              <div className="details">
                <span>{getCookie()["name"]}</span>
              </div>
            </div>
          </header>
          <br />
          <div className="users-list">
            {users.map((user) => (
              <div
                key={user.id}
                className="user"
                onClick={() => handleSelectedUser(user)}
              >
                <img src={``} alt="" />
                <div className="details" style={{ margin: "10px" }}>
                  <span>{user.name}</span>
                  <h1>&nbsp;| {roles[user.role]}</h1>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {selectedUser && (
        <>
          <div className="box right">
            <div className="wrapper">
              <section className="chat-area">
                <header>
                  <div>
                    Chatting with &nbsp;| &nbsp;&nbsp;
                    <span>{selectedUser.name}</span>
                    <p>{user.status}</p>
                  </div>
                </header>
                <div className="chat-box">
                  
                {messages.map((msg) => (
              <div
                key={msg.id}
                className="user"
                
              >
                
                <div className="details" style={{ margin: "10px" }}>
                <span>{msg.incoming_msg_id != getCookie()["id"] ? "You" +" | "+ roles[getCookie()["role"]] :  selectedUser.name + " | "+roles[selectedUser.role]}</span><br/>
                  <b> {msg.msg}</b>
                  
                  <hr />
                </div>
              </div>
            ))}

                </div>
                <form  className="typing-area">
                  <input
                    type="text"
                    name="incoming_id"
                    value={selectedUser.id}
                    hidden
                  />
                  <input
                  required
                    type="text"
                    name="message"
                    className="input-field"
                    placeholder="Type a message here..."
                    autoComplete="off"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <a className="btn button" onClick={()=>handleSubmit()}>
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                </form>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Chat;
