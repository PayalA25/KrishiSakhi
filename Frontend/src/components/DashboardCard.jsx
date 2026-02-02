// src/components/DashboardCard.jsx
const DashboardCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardCard;
