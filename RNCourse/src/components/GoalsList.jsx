import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

const GoalsList = ({ goalsArray, deleteGoal }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goalsArray}
        renderItem={(itemData) => (
          <Pressable
            android_ripple={{ color: "#dddddd" }}
            onPress={() => deleteGoal(itemData.item.id)}
            style={({ pressed }) => pressed && styles.pressedItem}
          >
            <View style={styles.goalsList}>
              <Text>{itemData.item.text}</Text>
              <View style={styles.removeGoal}>
                <Text style={styles.removeGoal}>Remove Goal</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },

  goalsList: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: "orange",
    backgroundColor: "orange",
    justifyContent: "space-between",
  },

  removeGoal: {
    backgroundColor: "red",
    color: "white",
    padding: 5,
    borderRadius: 10,
  },

  removeGoalText: {
    color: "white",
    fontWeight: "700",
  },

  pressedItem: {
    opacity: 0.5
  },
});

export default GoalsList;
