import React, { useState, useCallback } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";

let rerenderCount = 0;

const Todo = React.memo(
  ({ text, completeTodo, onEditTodo }) => {
    console.log(`Todo component rendered: ${++rerenderCount}`);

    const [edit, setEdit] = useState(false);
    const [todoTitle, setTodoTitle] = useState("");

    const iconClose = <Icon name="close" size={25} color="#ffffff" />;
    const iconEdit = <Icon name="edit" size={26} color="#ffffff" />;

    const activeEditTodo = () => {
      setEdit(true);
      setTodoTitle(text);
    };

    const endEditTodo = () => {
      setEdit(false);
      onEditTodo(todoTitle);
    };

    const onEditHendler = (text) => {
      setTodoTitle(text);
    };

    const onCloseTodo = () => {
      completeTodo();
    };

    return (
      <View style={styles.container}>
        <View style={styles.todoContainer}>
          {edit ? (
            <TextInput
              style={styles.todoEdit}
              value={todoTitle}
              onBlur={endEditTodo}
              autoFocus
              onChangeText={onEditHendler}
            ></TextInput>
          ) : (
            <Text style={styles.todoText}>{text}</Text>
          )}

          <View style={styles.icons}>
            <TouchableOpacity onPress={onCloseTodo}>
              {iconClose}
            </TouchableOpacity>
            <TouchableOpacity onPress={activeEditTodo}>
              {iconEdit}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  // (prevProps, nextProps) => {
  //   // console.log("prev:", prevProps, "new:", nextProps);
  //   if (nextProps.text === prevProps.text && nextProps.id !== prevProps.id) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  todoContainer: {
    backgroundColor: "#6e6c78",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    marginBottom: 20,
  },
  todoText: {
    width: "80%",
    color: "#27263D",
    fontSize: 16,
  },
  todoEdit: {
    width: "80%",
    color: "#27263D",
    fontSize: 16,
    outlineStyle: "none",
  },
  icons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 7,
    padding: 10,
  },
});

// function areEqual(prevProps, nextProps) {
//   return prevProps.id === nextProps.id && prevProps.text === nextProps.text;
// }

export default Todo;
