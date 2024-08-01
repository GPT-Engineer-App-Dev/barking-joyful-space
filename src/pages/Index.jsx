import { Paw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col justify-center items-center p-4">
      <Paw className="w-16 h-16 text-blue-600 mb-4" />
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to Pawsome Dogs</h1>
      <p className="text-xl text-blue-700 mb-8 text-center max-w-md">Discover the joy of canine companionship with our adorable and loving dogs!</p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Find Your Perfect Pup
      </Button>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {['Loyal Companions', 'Playful Friends', 'Furry Love'].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{feature}</h2>
            <p className="text-blue-600">Experience the unconditional love and joy that only a dog can bring to your life.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
