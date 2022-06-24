
import './settings.css';
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                <img src='img5.jpg' alt="" className="settingsPP" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fas fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Siddhartha" ></input>
                <label>Email</label>
                <input type="email" placeholder="Siddhartha@gmail.com" ></input>
                <label>Password</label>
                <input type="password"></input>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
            <Sidebar />
    </div>
  )
}
