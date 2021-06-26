import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
const Form = ({pendings, setPendings}) => {
    const [Pay, setPay] = useState({
        payName: "", amount: "", id: "", state: false
    });

    const handleChange = (e) => {
        setPay({...Pay, [e.target.name]: e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(Pay.payName === "" || Pay.amount === ""){
            alert("completa todos los campos");
        }else{
            Pay.id = uuidv4();
            setPendings([...pendings, Pay]);
            setPay({...Pay, payName:"", amount:""});
        }
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="field-form">
                <label>Nombre del pago:</label>
                <input onChange={handleChange} 
                className="form-control"
                type="text"
                name="payName"
                value={Pay.payName}/>
            </div>
            <div className="field-form">
                <label>Cantidad:</label>
                <input className="form-control"
                onChange={handleChange}
                type="number"
                name="amount"
                value={Pay.amount}/>
            </div>
            <input type="submit" className="btn btn-block mt-2" value="Agregar"/>
        </form>
    )
}
export default Form;
