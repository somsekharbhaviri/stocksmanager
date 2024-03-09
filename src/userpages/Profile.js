import React from 'react';

export default function Profile() {
  return (
    <div>
      <h2>My Profile</h2>

      {/* First Profile Box */}
      <div className="profile-box">
        <div className="outsideboxinvestments" style={{ marginLeft: "30px" ,marginBottom:"30px"}}>
          <div
            className="insideboxes"
            style={{
              height: "200px",
              width: "150px",
              marginTop: "25px",
              marginRight: "30px"
            }}
          ></div>
          <table>
            <tr>
              <td>Username:</td>
              <td>PFF921123</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>adnanshariff@gmail.com</td>
            </tr>
            <tr>
              <td>First Name:</td>
              <td>Adnan</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>Shariff</td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td>9387392222</td>
            </tr>
            <tr>
              <td>PAN:</td>
              <td>HVD927202</td>
            </tr>
          </table>
        </div>
      </div>

      {/* Second Profile Box */}
      <div className="profile-box">
        <div className="outsideboxinvestments" style={{ marginLeft: "30px" ,height:'400px',width:'1000px'}}>
          
          
        </div>
      </div>

      <div class="sub-main-div">
        <div class="verticalbox" style={{marginTop:'-940px',marginRight:'40px'}}>
          <h2>Settings</h2>
          <div align="center" class="outsideboxes" style={{ width: "400px" }}>
            <button className="insideboxesbutton" style={{ width: "360px",textAlign:'center' }} ><i>Change Password</i></button>
            <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center'}}><i>Change Account Pin</i></button>
            <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center'}}><i>Reports</i></button>
            <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center'}}><i>Nominee Details</i></button>
            <button className="insideboxesbutton" style={{ width: "360px",textAlign:'center' }}><i>Active Devices</i></button>
            <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center'}}><i>Trading Preferences</i></button>
            <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center'}}><i>Personal Details</i></button>
            <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center'}}><i>Change Profile Photo</i></button>
            <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center'}}><i>Edit Profile</i></button>
            <button className="insideboxesbutton" style={{ width: "360px" ,textAlign:'center'}}><i>Upgrade to premium</i></button>
          </div>
        </div>
      </div>
    </div>
  );
}