//week-10/item.js

export default function Item({ id, name, quantity, category, onSelect, onDelete }) {
  
  return (
    <li className="p-2 cursor-pointer">
      <div onClick={() => onSelect(name)}>
        <div className="text-xl font-bold">{name}</div>
        <div>Buy {quantity} in {category}</div>
      </div>
      <button onClick={() => onDelete(id)} className="text-red-500 text-sm">Delete</button>
    </li>
  );
}