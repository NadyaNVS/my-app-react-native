import React, { useState, useCallback } from "react";
import TodoList from "../components/TodoList";
import { StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
import TodoForm from "../components/TodoForm";

let rerenderCount = 0;

const TodoApp = () => {
  console.log(`TodoForm component rendered: ${++rerenderCount}`);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(
    (todo) => {
      setTodos([...todos, todo]);
      console.log([todos]);
    },
    [todos.length]
  );

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>What's the Plan fot Today?</Text>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodoTitle={changeTodoTitle}
      />
    </KeyboardAvoidingView>
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
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    color: "#3b3a3d",
    fontSize: 26,
    fontWeight: 700,
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 50,
    padding: 10,
    flex: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#27263d",
    borderWidth: 1,
    color: "#27263D",
    fontSize: 16,
    outlineStyle: "none",
  },
  buttonAdd: {
    justifyContent: "center",
    backgroundColor: "#27263d",
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonText: {
    color: "#7aa899",
  },
});

export default TodoApp;
