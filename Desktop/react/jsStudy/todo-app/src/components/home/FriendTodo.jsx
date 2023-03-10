const FriendTodo =( {content, name, createAt}) => {
    console.log(content);
    return (
        <div className="m-4">
            <div className = "border border-solid rounded border-red-100 flex justify-between">
                <div>
                    <p>{content}</p>
                </div>
             <p>
                <b>{name}</b>
                {createAt.split(".")[0].replace("T", " ")}

             </p>
            </div>       
        </div>
    )
}
export default FriendTodo