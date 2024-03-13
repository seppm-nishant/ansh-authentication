import Link from 'next/link';

function Sidebar() {
  return (
    <aside className="bg-gray-700 w-64 p-4 text-white">
      <ul>
        <li className="mb-4">
          <Link href="/UserDashboard">
            <span className="block hover:bg-gray-600 py-2 px-4">Dashboard</span> 
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/settings">
            <span className="block hover:bg-gray-600 py-2 px-4">Settings</span>
          </Link>
        </li>
        {/* ... Add more navigation items as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;

