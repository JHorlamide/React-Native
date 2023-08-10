import { Fragment } from "react";
import { StyleSheet, View, Button, StatusBar } from "react-native";
import CreateGoals from "./src/components/CreateGoals";
import GoalsList from "./src/components/GoalsList";
import useGoals from "./src/hooks/useGoals";

export default function App() {
  const {
    goalsList,
    setGoal,
    handleSubmit,
    deleteGoal,
    showModal,
    handleToggleModal,
  } = useGoals();

  return (
    <Fragment>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={"purple"}
          onPress={handleToggleModal}
        />

        {/* Create Goal Component */}
        <CreateGoals
          setGoal={setGoal}
          handleSubmit={handleSubmit}
          showModal={showModal}
          handleToggleModal={handleToggleModal}
        />

        {/* Goal List Container */}
        <GoalsList goalsArray={goalsList} deleteGoal={deleteGoal} />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});
