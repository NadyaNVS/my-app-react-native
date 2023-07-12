import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

let rerenderCount = 0;

const TodoForm = React.memo(({ addTodo }) => {
  console.log(`TodoForm component rendered: ${++rerenderCount}`);

  const [input, setInput] = useState("");

  const onTextChange = (text) => {
    setInput(text);
  };
  const onHendleSubmit = () => {
    Keyboard.dismiss();
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Add a todo"
        value={input}
        onChangeText={onTextChange}
        onSubmitEditing={onHendleSubmit}
      />
      <TouchableOpacity style={styles.buttonAdd} onPress={onHendleSubmit}>
        <Text style={styles.buttonText}>Add todo</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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

export default TodoForm;
