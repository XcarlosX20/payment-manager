import Pending from "./Pending";
const PendingList = ({ pendings, setPendings, completed, setCompleted }) => {
    if (pendings.length <= 0) return null
    return (
        <div className="pending-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre:</th>
                        <th>Cantidad:</th>
                        <th>Accion:</th>
                    </tr>
                </thead>
                <tbody>
                    {pendings.map(pending => (
                        <Pending pending={pending}
                            pendings={pendings}
                            setPendings={setPendings}
                            completed={completed}
                            setCompleted={setCompleted}
                            key={pending.id} />))}
                </tbody>
            </table>
        </div>


    )
}
export default PendingList;