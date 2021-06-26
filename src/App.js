import { Fragment, useEffect, useState } from "react";
import "./normalize.css";
import "./bootstrap.min.css";
import Form from "./Components/Form";
import PendingList from "./Components/PendingList";
import CompletedList from "./Components/CompletedList";

//ADD STYLES and pay one part option
function App() {
    //LocalStorage
    let pendingsLS = JSON.parse(localStorage.getItem('pendings'));
    let completedLS = JSON.parse(localStorage.getItem('completed'));
    if(!pendingsLS) pendingsLS = [];
    if(!completedLS) completedLS = [];
    const [pendings, setPendings] = useState(pendingsLS);
    const [completed, setCompleted] = useState(completedLS);
   useEffect(() => {
    const pendingsEfecct = () => {
      if(pendingsLS){
        localStorage.setItem('pendings', JSON.stringify(pendings));
      } else{
        localStorage.setItem('pendings', JSON.stringify([]))
      }
    }
    const completedEfecct = () => {
      if(completedLS){
        localStorage.setItem('completed', JSON.stringify(completed));
      } else{
        localStorage.setItem('completed', JSON.stringify([]))
      }
    }
    pendingsEfecct();
    completedEfecct();
   }, [pendings, pendingsLS, completed, completedLS])
    return (

        <Fragment>
            <div className="container my-4">
                <Form
                    pendings={pendings}
                    setPendings={setPendings} />
                <h2>{pendings.length >= 0 ? "Agrega un pago pendiente" : "Pagos pendinetes"}</h2>
                <PendingList
                pendings={pendings}
                setPendings={setPendings}
                setCompleted={setCompleted}
                completed={completed} />

                <CompletedList
                completed={completed} />
            </div>
            
        </Fragment>


    )
}
//DEVELOPED BY CARLOS SIERRA
export default App;