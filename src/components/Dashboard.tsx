import { useState } from "react";

const Dashboard = () => {
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDescription] = useState("");
  const [habits, setHabits] = useState([
    { name: "Exercise", description: "Go for a run every morning" },
    { name: "Read", description: "Read a book for 30 minutes every day" },
    {
      name: "Meditate",
      description: "Practice meditation for 10 minutes daily",
    },
  ]);

  const handleHabitNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHabitName(event.target.value);
  };

  const handleHabitDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHabitDescription(event.target.value);
  };

  const handleAddHabit = () => {
    const newHabit = { name: habitName, description: habitDescription };
    setHabits([...habits, newHabit]);
    setHabitName("");
    setHabitDescription("");
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Habit Tracker</h1>
      </header>
      <div className="flex-grow">
        <div className="flex flex-col justify-center max-w-1200">
          <div className="border border-white rounded-md m-5 flex flex-col p-5">
            <h1 className="text-white text-2xl">Habits</h1>
            <div>
              <label className="text-white">Habit Name</label>
              <input
                className="bg-blue-300 rounded-md mx-2 px-4 focus:outline-none"
                value={habitName}
                onChange={handleHabitNameChange}
              />
              <label className="text-white">Habit Description</label>
              <input
                className="bg-blue-300 rounded-md mx-2 px-4 focus:outline-none"
                value={habitDescription}
                onChange={handleHabitDescriptionChange}
              />
              <button
                className="bg-green-500 hover:bg-green-700 text-white text-sm rounded-md px-4 py-1 mt-2"
                onClick={handleAddHabit}
              >
                Add Habit
              </button>
            </div>
            <hr className="my-5" />
            <div>
              {habits.map((habit, index) => (
                <div key={index}>
                  <h2 className="text-white text-lg font-bold">{habit.name}</h2>
                  <p className="text-white">{habit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-4 px-6 flex justify-center">
        Habit Tracker
      </footer>
    </div>
  );
};

export default Dashboard;
