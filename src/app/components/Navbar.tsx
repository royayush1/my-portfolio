import Link from "next/link";

export default function Navbar(){
return(
    <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white font-bold text-2xl hover:text-purple-600">Ayush Roy</Link>
            <div className="space-x-4">
                <Link href="/" className="text-gray-300 hover:text-purple-600">Home</Link>
                <Link href="/projects" className="text-gray-300 hover:text-purple-600">Projects</Link>
                <Link href="/contact" className="text-gray-300 hover:text-purple-600">Contact</Link>
            </div>
        </div>
    </nav>
);
}