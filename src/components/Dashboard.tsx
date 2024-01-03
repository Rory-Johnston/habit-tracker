import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

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
    if (!habitName || !habitDescription) return;

    const newHabit = { name: habitName, description: habitDescription };

    setHabits([...habits, newHabit]);
    setHabitName("");
    setHabitDescription("");
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen flex flex-col items-center justify-center max-w-full">
      <header className="bg-gray-900 text-white py-4 px-6 w-full">
        <h1 className="text-2xl font-bold">Habit Tracker</h1>
      </header>
      <div className="flex-grow">
        <div className="flex flex-col justify-center max-w-[1200px]">
          <div className="rounded-md m-5 flex flex-col p-5">
            <h1 className="text-white text-2xl">Habits</h1>
            <div className="flex flex-col md:block">
              <label className="text-white">Habit Name</label>
              <input
                className="bg-gray-900 rounded-md lg:mx-2 px-4 focus:outline-none text-white"
                value={habitName}
                onChange={handleHabitNameChange}
              />
              <label className="text-white">Habit Description</label>
              <input
                className="bg-gray-900 rounded-md lg:mx-2 px-4 focus:outline-none text-white"
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
            <div className="grid grid-cols-1 gap-4 md:text-xl text-sm max-h-80 overflow-auto">
              {habits.map((habit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-900 rounded-md p-4"
                >
                  <div>
                    <h2 className="text-white text-lg font-bold">
                      {habit.name}
                    </h2>
                    <p className="text-white">{habit.description}</p>
                  </div>
                  <div className="flex justify-center align-items">
                    <button
                      className="text-green-300 text-2xl mr-2"
                      onClick={() => {
                        const updatedHabits = [...habits];
                        updatedHabits.splice(index, 1);
                        setHabits(updatedHabits);
                      }}
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="text-red-300 text-2xl"
                      onClick={() => {
                        const updatedHabits = [...habits];
                        updatedHabits.splice(index, 1);
                        setHabits(updatedHabits);
                      }}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
