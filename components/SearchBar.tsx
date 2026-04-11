import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white w-full h-12 border border-black/50 rounded-full px-5 flex justify-center items-center text-gray-500">
      <input type="text" placeholder="Search..." className="w-full h-full text-gray-500 outline-none" />
      <Search className="w-5 h-5 ml-2" />
    </div>
  );
}
