import { Text, Pressable, StyleSheet } from "react-native";

const MyButton = props => {
  return (
    <Pressable onPress={props.onPress} style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 128, 0, 0.05)",
    padding: 8,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});
export default MyButton;
