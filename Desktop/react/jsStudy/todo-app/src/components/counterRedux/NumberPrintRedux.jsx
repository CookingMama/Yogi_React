import { useSelector } from "react-redux"

const PrintNumberRedux = () => {
    const number = useSelector ((state) =>state.counter.value)
    return (
        <h1 className = "text=5xl" > number: {number} </h1>
    )
}

export default PrintNumberRedux