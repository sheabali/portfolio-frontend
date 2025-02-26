import Link from 'next/link';
import { FaUser, FaCog, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/create-project"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaUser className="h-5 w-5" />
            <span>Create Project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaCog className="h-5 w-5" />
            <span>Create Blog</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
