const Completed = ({payCompleted}) => {
    const {payName, amount, state, id} = payCompleted;
    return(
        <tr>
            <td>{payName}</td>
            <td>{amount}$</td>
        </tr>
    )
}
export default Completed;