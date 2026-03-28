import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center p-5 text-center h-screen">
      <p>Page is under maintenance, redirect to <Link href={"/product"} className="text-blue-500 underline">product</Link> page to view the progress</p>
    </div>
  );
}
