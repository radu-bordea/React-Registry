// Importing Outlet component from React Router to render nested routes
import { Outlet } from "react-router-dom";
// Importing Header component
import Header from "../components/Header";

// Root component serving as the layout for the application
export default function Root() {
  return (
    // Main container for the application content
    <div className="container mx-auto px-20">
      {/* Header component */}
      <Header />
      {/* Outlet for rendering nested routes */}
      <Outlet />
    </div>
  );
}
