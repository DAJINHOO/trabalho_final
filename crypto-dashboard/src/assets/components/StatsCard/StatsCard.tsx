type StatsCardProps = {
  title: string;
  value: string | number;
};

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-5 border">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}

export default StatsCard;