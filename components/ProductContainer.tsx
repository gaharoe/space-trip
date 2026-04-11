import { Shirt } from "lucide-react";

export default function ProductContainer({children, category} : {children: React.ReactNode, category?: string}) {
    return (
        <div className="pt-5 text-black">
            <p className="text-2xl font-bold">{category || "Other Products"}</p>
            <p className="mb-3 text-xs text-black/50">Tentukan style terbaikmu</p>
            <div className="gap-4 grid grid-cols-2 w-full">
                {children}
            </div>
        </div>
    )
}