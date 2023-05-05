import React from "react";

const ContactResponse = () => {
  return (
    <div class="form-container">
      <style>
        {`
                .form-container {
                    padding-top: 24px;
                    min-height:82vh;
                    max-width: 500px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 30px;
                }
        
                input[type="text"],
                input[type="password"] {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 20px;
        
                }
                
                `}
      </style>
      <p>"We have received your response. We will get back to you shortly"</p>
    </div>
  );
};

export default ContactResponse;
