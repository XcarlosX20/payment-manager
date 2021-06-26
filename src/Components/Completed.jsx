const Completed = ({payCompleted}) => {
    const {payName, amount} = payCompleted;
    return(
        <tr>
            <td>{payName}</td>
            <td>{amount}$</td>
        </tr>
    )
}
export default Completed;