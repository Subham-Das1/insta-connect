import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import SignupPage from "./components/Signup";
import { Layout } from "./components/Layout";
import { Feed } from "./components/Feed";
import { Stories } from "./components/stories";
import { Profile } from "./components/Profile";
import { Messages } from "./components/Messages";
import { Search } from "./components/Search";
import { Notifications } from "./components/Notifications";
import { Settings } from "./components/Settings";

function App() {
  return (
    <Router>  
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* App Routes */}
        <Route path="/app" element={<Layout />}>
          <Route index element={
            <div className="space-y-6">
              <Stories />
              <Feed />
            </div>
          } />
          <Route path="search" element={<Search />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900">Page not found</h2>
              <p className="mt-2 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
