import Link from "next/link";

export default function Home() {
  return (
    <main className= "flex min-h-screen flex-col items-center justify-between p-24">
      <div className>
        <h1 className="text-3xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
          <ul>
            <li>
            <a Link href="/week-2"className = "text-xl hover:text-blue-400 hover:underline">Week 2 Assignment</a>
            </li>
            <li>
            <a Link href="/week-3"className = "text-xl hover:text-blue-400 hover:underline">Week 3 Assignment</a>
            </li>
            <li>
            <a Link href="/week-4"className = "text-xl hover:text-blue-400 hover:underline">Week 4 Assignment</a>
            </li>
          </ul>
      </div>
      
    </main>
  );
}
