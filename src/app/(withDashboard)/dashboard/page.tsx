import UserCard from '@/components/UserCard/UserCard';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <UserCard user={session.user} />
    </div>
  );
}
