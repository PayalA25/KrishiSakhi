// src/components/Sidebar.jsx
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-green-700 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Agro Dashboard</h2>
      <ul className="space-y-3">
        <li>Dashboard</li>
        <li>History</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;
