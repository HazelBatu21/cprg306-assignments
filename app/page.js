import Link from "next/link";

export default function Home() {
  return (
    <main className= "flex min-h-screen flex-col items-center justify-between p-24">
      <div className>
        <h1 className="text-4xl font-bold text-gray-600 mb-7">CPRG 306: Web Development 2 - Assignments</h1>
          <ul class = "list-disc">
            <li className = "mb-1">
            <a Link href="/week-2"className = "text-2xl text-gray-600 hover:text-blue-400 hover:underline">Week 2 Assignment</a>
            </li>
            <li className = "mb-1">
            <a Link href="/week-3"className = "text-2xl text-gray-600 hover:text-blue-400 hover:underline">Week 3 Assignment</a>
            </li>
            <li className = "mb-1"> 
            <a Link href="/week-4"className = "text-2xl text-gray-600 hover:text-blue-400 hover:underline">Week 4 Assignment</a>
            </li>
            <li className = "mb-1">
            <a Link href="/week-5"className = "text-2xl text-gray-600 hover:text-blue-400 hover:underline">Week 5 Assignment</a>
            </li>
            <li className = "mb-1">
            <a Link href="/week-6"className = "text-2xl text-gray-600 hover:text-blue-400 hover:underline">Week 6 Assignment</a>
            </li>
            <li className = "mb-1">
            <a Link href="/week-7"className = "text-2xl text-gray-600 hover:text-blue-400 hover:underline">Week 7 Assignment</a>
            </li>
            <li className = "mb-1">
            <a Link href="/week-8"className = "text-2xl text-gray-600 hover:text-blue-400 hover:underline">Week 8 Assignment</a>
            </li>
            <li className = "mb-1">
            <a Link href="/week-10"className = "text-2xl text-gray-600 hover:text-blue-400 hover:underline">Week 10 Assignment</a>
            </li>
          </ul>
      </div>
      
    </main>
  );
}
