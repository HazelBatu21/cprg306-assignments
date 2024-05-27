export default function Item({ name, quantity, category }) {

    return (
      <li className="flex justify-between items-center p-4 border border-gray-300 rounded-md shadow-sm mb-2">
        <div>
          <p className="font-bold text-xl text-blue-600">{name}</p>
          <p className="text-gray-500 italic">Buy {quantity} in {category}</p>
        </div>
      </li>
    );
  }
  