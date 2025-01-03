import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Time Usage Dashboard</h1>
        <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
      </div>
    </div>
  );
}

export default Home;
