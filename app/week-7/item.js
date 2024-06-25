//week-7/item.js

export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li className="p-2 cursor-pointer" onClick={() => onSelect(name)}>
        <div className="font-bold">{name}</div>
        <div>Buy {quantity} in {category}</div>
      </li>
    );
  }
  