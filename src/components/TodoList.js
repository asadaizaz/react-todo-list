import React from "react";
import Todo from './Todo';

const TodoList = ({ toDoList }) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <Todo todo={todo} />
                )
            })}
        </div>
    );
};
export default TodoList;