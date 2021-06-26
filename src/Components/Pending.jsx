const Pending = ({ pending, completed, setCompleted, pendings, setPendings}) => {
    const {payName, amount, state, id} = pending;
    const deletePay = (id) => {
        setPendings(pendings.filter(pending=> pending.id !== id));
    }
    const selectPay = (id) => {
        const payCompleted = {
            payName,
            amount, 
            id,
            state: true
        }
        deletePay(id);
        setCompleted([...completed, payCompleted]);
    }

    return (
        <tr>
            <td>{payName}</td>
            <td>{amount}$</td>
            <td><button onClick={() => {selectPay(id);}}
            className="btn bg-warning mr-2">{state ? "completo" : "completar"}</button>
            <button className="btn btn-danger" onClick={() => {deletePay(id)}}>X</button>
            </td>
        </tr>
    )
}
export default Pending;