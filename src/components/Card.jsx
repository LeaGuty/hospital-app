function Card({title, value, bgColor, textColor}) {
  return (
    <div className={`rounded-lg shadow-md p-4 ${bgColor}`}>
      <h2 className={`text-2xl font-semibold mb-4 ${textColor}`}>{title}</h2>
      <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
}
export default Card