import avatarjessica from "../assets/avatar-jessica.jpeg";
import "../Styles/FirstPage.scss";

function FirstPage() {
  return (
    <>
  
      <div className="pagediv">
    
        <img src={avatarjessica} alt="john" />

        <div className="para">
          <p> Jessica Randall </p>
          <p> London,  United Kingdom</p>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <div className="buttoncontainer">
            <button>GitHub</button>
            <button>Frontend Mentor</button>
            <button>LinkedIn</button>
            <button>Twitter</button>
            <button>Instagram</button>
        </div>
      </div>

    </>
  );
}

export default FirstPage;
