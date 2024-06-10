export default function Item ({name, quality, category})
{
    return (
        <li className="p-2">
            <div className="font-bold">{name}</div>
            <div>Buy {quantity} in {category}</div>
        </li>
    );
}