import { Home, Shirt, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/10 px-5 py-5 flex justify-around items-center">
      <Link href="/" className="flex flex-col items-center">
        <Home width={20} />
        <p className="text-xs">Beranda</p>
      </Link>
      <Link href="/product" className="flex flex-col items-center">
        <Shirt width={20} />
        <p className="text-xs">Produk</p>
      </Link>
      <Link href="/cart" className="flex flex-col items-center">
        <ShoppingBag width={20} />
        <p className="text-xs">Keranjang</p>
      </Link>
      <Link href="/profile" className="flex flex-col items-center">
        <User width={20} />
        <p className="text-xs">Profil</p>
      </Link>
    </div>
  );
}
