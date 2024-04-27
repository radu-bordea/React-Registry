import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";

// Component for the search input field
export default function SearchInput() {
  // State for the search term
  const [term, setTerm] = useState("");
  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Navigate to the search results page with the provided term
    navigate(`/search?term=${term}`);
  };

  return (
    // Form for input and submission
    <form onSubmit={handleSubmit}>
      {/* Container for search input */}
      <div className="relative">
        {/* Icon for search */}
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
        {/* Input field for search */}
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="pl-10 py-2 w-full border-0 shadow-none"
          placeholder="Search packages"
        />
      </div>
    </form>
  );
}
