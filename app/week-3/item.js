export default function Item({ name, quantity, category }) {

    return (
      <li className="max-w-lg mx-left p-4 border-l-4 border-blue-500 bg-white rounded-md shadow-sm mb-2">
        <div>
          <p className="font-bold text-xl text-blue-600">{name}</p>
          <p className="text-gray-500 italic">Buy {quantity} in {category}</p>
        </div>
      </li>
    );
  }
  