"use client "

import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
// ... other component imports

function Dashboard() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="grid grid-cols-5 gap-4">
        <Sidebar />
        <main className="col-span-4">
          {/* <ProfileSettings />  */}
          {/* <AccountInformation /> */}
          {/* ... Add sections for notifications, coding profiles later */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
