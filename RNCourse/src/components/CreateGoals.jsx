import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

const CreateGoals = ({
  setGoal,
  handleSubmit,
  showModal,
  handleToggleModal,
}) => {
  const inputChange = (enteredText) => {
    setGoal(enteredText);
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/goal.png")}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Your course goal"
          onChangeText={inputChange}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              color={"gray"}
              title="Add Goal"
              onPress={() => handleSubmit()}
            />
          </View>

          <View style={styles.buttons}>
            <Button
              color={"#f31282"}
              title="Cancel"
              onPress={() => handleToggleModal()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateGoals;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginBottom: 24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingHorizontal: 16,
    backgroundColor: "black",
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 20,
    paddingVertical: 12,
    paddingLeft: 10,
    width: "100%",
    marginRight: 8,
    color: "white",
    backgroundColor: "darkGray",
  },

  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 16,
  },

  buttons: {
    width: "30%",
    marginHorizontal: 8,
    color: "black",
  },

  imageStyle: {
    width: 100,
    height: 100,
    margin: 16,
  },
});
