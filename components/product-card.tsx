type Props = {
  name: string;
  price: number;
  category: string;
};

export default function ProductCard({ name, price, category }: Props) {
  const badgeColor =
    category === "electronics"
      ? "bg-blue-100 text-blue-700"
      : "bg-purple-100 text-purple-700";

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h2 className="text-3xl font-bold mb-2">{name}</h2>

      <p className="text-xl font-semibold mb-2">
        ${price.toFixed(2)}
      </p>

      <span
        className={`inline-block px-3 py-1 text-sm rounded-full ${badgeColor}`}
      >
        {category}
      </span>
    </div>
  );
}
