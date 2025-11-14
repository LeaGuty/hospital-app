function StatCard({ icon, title, value, bgColor, iconColor }) {
    return (
        <div className={`${bgColor} p-6 rounded-xl shadow hover:shadow-blood   border-2 border-hospital-primary `}>
            <div className="flex items-center justify-between">
                <div>
                    <p className={`text-sm font-medium ${iconColor} mb-1`}>
                        {title}
                    </p>
                    <p className="text-3xl font-bold text-red-950">
                        {value}
                    </p>
                </div>
                <div className={`text-4xl ${iconColor} filter drop-shadow-[0_0_10px_rgba(220,20,60,0.7)]`}>
                    {icon}
                </div>

            </div>

        </div>
    );
}
export default StatCard;
