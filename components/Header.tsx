"use client";

import {
  ListIndentIncrease,
  ListIndentDecrease,
  ShoppingBag,
} from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";
import CartButton from "./CartButton";
import { useAuth } from "@/hooks/useAuth";
import SearchBar from "./SearchBar";
import CategoryBar from "./CategoryBar";

export default function Header() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
  
  return (
    <div className="flex flex-col items-center px-5 pt-3 sticky -top-15 border-b border-b-black/10 w-svw text-black bg-white">
      <h1 className="text-2xl font-bold mb-2 py-3">SPACE TRIP</h1>
      <SearchBar />
      <CategoryBar />
    </div>
  );
}
