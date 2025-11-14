function StatCard({ icon, title, value, bgColor, iconColor }) {
    return (
        <div className={`${bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className={`text-sm font-medium ${iconColor} mb-1`}>
                        {title}
                    </p>
                    <p className="text-3xl font-bold text-gray-800">
                        {value}
                    </p>
                </div>
                <div className={`text-4xl ${iconColor}`}>
                    {icon}
                </div>

            </div>
            
        </div>
    );
}
export default StatCard;
