const DashboardCard = ({ title, value, onAction, isActive, activeLabel, inactiveLabel }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600">{value}</p>
            <button
                onClick={onAction}
                className={`mt-4 px-4 py-2 text-white rounded ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
            >
                {isActive ? activeLabel : inactiveLabel}
            </button>
        </div>
    );
};

export default DashboardCard;
