import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Todo App</h1>
      <p className="text-xl mb-8">Start organizing your tasks efficiently!</p>
      <Button asChild>
        <Link to="/todo">Go to Todo List</Link>
      </Button>
    </div>
  );
};

export default Index;