import {useState} from "react";
const Form = ({pendings, setPendings}) => {
    const [Pay, setPay] = useState({
        payName: "", amount: "", id: 1, state: false
    });
    const handleChange = (e) => {
        setPay({...Pay, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(Pay.payName === "" || Pay.amount === ""){
            alert("completa todos los campos");
        }else{
            Pay.id = pendings.length + 1
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
