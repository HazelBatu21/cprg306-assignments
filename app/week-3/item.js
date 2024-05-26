// app/week-3/item.js

export default function Item({ name, quantity, category }) {
    return (
      <li className="flex justify-between p-2 border-b">
        <span className="font-medium">{name}</span>
        <span className="text-gray-500">Qty: {quantity}</span>
        <span className="text-gray-500 italic">({category})</span>
      </li>
    );
  }
  