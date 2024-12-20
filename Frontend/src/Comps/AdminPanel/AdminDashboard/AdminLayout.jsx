import Navbar from './Navbar';
import Sidebar from './SideBar';

function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              <div className="container mx-auto px-6 py-8">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

export default AdminLayout;
