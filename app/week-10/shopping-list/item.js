//week-10/item.js

export default function Item({ name, quantity, category, onSelect, onDelete }) {
    return (
      <li className="p-2 cursor-pointer" onClick={() => onSelect(name)}>
        <div className="font-bold">{name}</div>
        <div>Buy {quantity} in {category}</div>
        <button onClick={() => onDelete(id)} className="text-red-500">Delete</button>
      </li>
    );
  }
  