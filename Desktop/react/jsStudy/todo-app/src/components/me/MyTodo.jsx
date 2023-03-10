const MyTodo = ({content, checked, createAt}) => {
    console.log(checked)
    return (
        <div className="m-4">
            <div className = "border border-solid rounded border-red-100 flex justify-between">
                <div>
                    <p>{content}</p>
                </div>
             <p >
             <input type={"checkbox"} /> {createAt.split(".")[0].replace("T", " ")}
             </p>
            </div>       
        </div>
    )
}
export default MyTodo