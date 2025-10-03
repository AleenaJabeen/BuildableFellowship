
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";
function Home() {
   const navigate = useNavigate();
      const [profile, setProfile] = useState(null);
 useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get("/profile");
        setProfile(data);
      } catch (err) {
        console.error("Not authenticated");
        navigate("/login");
      }
    };
    fetchProfile();
  }, []);

   const handleLogout = () => {
    localStorage.removeItem("token"); // clear JWT
    navigate("/login");
  }
  return (
   <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center">
        {profile ? (
          <>
            <h2 className="text-2xl font-bold mb-2">Welcome, {profile.username} 🎉</h2>
            <p className="mb-4">Email: {profile.email}</p>
          </>
        ) : (
          <p>Loading profile...</p>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Home;
