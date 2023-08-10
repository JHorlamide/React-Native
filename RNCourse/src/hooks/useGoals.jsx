import { useState } from "react";

const useGoals = () => {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (cloModal) => {
    setGoalsList((prevGoals) => [
      { text: goal, id: goalsList.length + 1 },
      ...prevGoals,
    ]);

    setShowModal(false);
  };

  const deleteGoal = (id) => {
    setGoalsList((prevGoals) => {
      return prevGoals.filter((prevGoal) => prevGoal.id !== id);
    });
  };

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return {
    goalsList,
    showModal,
    setGoal,
    deleteGoal,
    handleSubmit,
    handleToggleModal,
  };
};

export default useGoals;
