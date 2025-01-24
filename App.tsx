import React, { useState, useEffect } from 'react';
import { Menu, X, Settings, Bell, User, Search } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992 && width <= 1600) {
        setScale(0.9);
      } else if (width >= 700 && width <= 767) {
        setScale(0.8);
      } else if (width >= 600 && width < 700) {
        setScale(0.75);
      } else if (width <= 600) {
        setScale(0.5);
      } else {
        setScale(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }} className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <span className="ml-4 text-xl font-semibold">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-500" />
              <Bell className="w-5 h-5 text-gray-500" />
              <User className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 pt-16">
        {/* Left Sidebar */}
        <aside
          className={`${
            isMenuOpen ? 'w-64' : 'w-0'
          } transition-all duration-300 bg-gray-800 text-white overflow-hidden fixed h-full left-0 top-16`}
        >
          <div className="p-4">
            <ul className="space-y-2">
              <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard</li>
              <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Analytics</li>
              <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Reports</li>
              <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Settings</li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className={`flex-1 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
                  <p className="text-gray-600">
                    This is your main content area. You can add any content here.
                    The layout is fully responsive and includes a collapsible sidebar.
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold">Statistics</h3>
                      <p className="text-sm text-gray-600">View your latest stats</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold">Performance</h3>
                      <p className="text-sm text-gray-600">Check your performance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Quick Actions</h3>
                    <Settings className="w-5 h-5 text-gray-500" />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center p-2 hover:bg-gray-50 rounded">
                      <span className="text-sm">Create New Report</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-50 rounded">
                      <span className="text-sm">View Analytics</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-50 rounded">
                      <span className="text-sm">Update Profile</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className={`bg-gray-100 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 Dashboard. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;