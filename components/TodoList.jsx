import React from "react";
import { View, ScrollView } from "react-native";
import Todo from "./Todo";

let rerenderCount = 0;

const TodoList = React.memo(({ todos, changeTodoTitle, deleteTodo }) => {
  console.log(`TodoList component rendered: ${++rerenderCount}`);

  return (
    <View>
      <ScrollView>
        {todos.map((todo, index) => {
          const onEditTodoTitle = (todoTitle) => {
            changeTodoTitle(todo.id, todoTitle);
          };
          return (
            <View key={index}>
              <Todo
                {...todo}
                completeTodo={deleteTodo(todo.id)}
                onEditTodo={onEditTodoTitle}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
});
// (prevProps, nextProps) => {
//   console.log("prev:", prevProps, "new:", nextProps);
//   if (prevProps.todos.length === nextProps.todos.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

function areEqual(prevProps, nextProps) {
  return (
    prevProps.todos.length === nextProps.todos.length &&
    prevProps.todos.every((todo, index) => {
      todo.id === nextProps.todos[index].id &&
        todo.text === nextProps.todos[index].text;
    })
  );
}

export default TodoList;
