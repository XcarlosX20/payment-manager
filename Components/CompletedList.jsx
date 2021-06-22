import Completed from "./Completed"

const PendingList = ({ completed, setCompleted }) => {
    if (completed.length <= 0) return null
    return (
        <div className="completed-container">
            <h2>{completed.length <= 0 ? null : "Pagos completados"}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre:</th>
                        <th>Cantidad:</th>
                    </tr>
                </thead>
                <tbody>
                    {completed.map(payCompleted => (
                        <Completed payCompleted={payCompleted}
                        key={payCompleted.id}/>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
export default PendingList;