import { Fragment, useState } from "react";
import "./normalize.css";
import "./bootstrap.min.css";
import Form from "./Components/Form";
import PendingList from "./Components/PendingList";
import CompletedList from "./Components/CompletedList";

//ADD LOCALSTORAGE ON PENDING AND COMPLETED
function App() {
    const [pendings, setPendings] = useState([]);
    const [completed, setCompleted] = useState([]);

    return (

        <Fragment>
            <div className="container my-4">
                <Form
                    pendings={pendings}
                    setPendings={setPendings} />
                <h2>{pendings.length <= 0 ? "Agrega un pago pendiente" : "Pagos pendinetes"}</h2>
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