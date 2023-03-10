const todo = [
    { id: 0 , title: "밥먹기"},
    { id: 1, title: "매뉴 정하기"},
    { id : 2, title: "김치찌개"},
];

export const insertTodo = (title) => {
    const id = todo.length;
    todo.push({title, id : todo.length});
    return id;
}

export const findAllTodo = () => {
    return todo;
}

export const findById = (id) => {
    return todo.find((t) => t.id === id);
}
