

export default function Item({ name, quantity, category }) {
    return (
      <li className="p-2">
        <div className="font-bold">{name}</div>
        <div>Buy {quantity} in {category}</div>
      </li>
    );
  }
  