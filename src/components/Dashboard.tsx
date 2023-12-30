const Dashboard = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Habit Tracker</h1>
      </header>
      <main className="p-6">{/* Dashboard content goes here */}</main>
      <footer className="bg-gray-900 text-white py-4 px-6 flex justify-center items-center fixed bottom-0 left-0 w-full">
        <p>&copy; 2024 Habit Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
