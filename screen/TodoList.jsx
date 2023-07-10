import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";

const TodoList = () => {
  console.log("TodoList component rendered");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (deleteId) => () => {
    console.log("click", deleteId);
    setTodos(todos.filter((todo) => todo.id !== deleteId));
  };

  const changeTodoTitle = (id, updatedTitle) => {
    let todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.text = updatedTitle;
      setTodos([...todos]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's the Plan fot Today?</Text>
      <TodoForm addTodo={addTodo} />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: "#7aa899",
  },
  title: {
    color: "#3b3a3d",
    fontSize: 26,
    fontWeight: 700,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default TodoList;
