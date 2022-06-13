import { useState } from "react";

function App() {

    const [ toggle, setToggle ] = useState(true);


    const toggleBtn = () => {
        if(toggle === true ){
            setToggle(false)
        }else{
            setToggle(true)
        }

    }
  return (
    <div>
      <div className="container mt-5">
        <div>     
               <button onClick={toggleBtn} className="btn-primary mt-3 btn">Toggle image</button>
            {
                toggle &&   <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFW_MHyKNxW7Q/profile-displayphoto-shrink_200_200/0/1653467346320?e=1660780800&v=beta&t=X71BA0p8MO7ETVu_Nrkh0oFF5Yk_rhLRxkxXNL2MV4s"
                alt=""
              />
            }
        </div>
      </div>
    </div>
  );
}

export default App;
