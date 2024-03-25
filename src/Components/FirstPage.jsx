import myself from "../assets/pic1b.jpg";
import "../Styles/FirstPage.scss";

function FirstPage() {
  return (
    <>
  
      <div className="pagediv">
    
        <img src={myself} alt="john" />

        <div className="para">
          <p> Olubukola Adebiyi </p>
          <p> Oyo,  Nigeria</p>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <div className="buttoncontainer">
            <button>GitHub</button>
            <button>Upwork</button>
            <button>LinkedIn</button>
            <button>Twitter</button>
            <button>Instagram</button>
        </div>
      </div>

    </>
  );
}

export default FirstPage;
