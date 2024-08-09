import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <Link href="/"><Image src="/new-pic.jpg" className="rounded-full mt-4" alt="pic" width={70} height={70} /></Link>
            <h1 className="text-lg mt-4 text-gray-900">Sewell Stephens</h1>
            <p className="text-sm text-gray-900">Founder of <a href="https://krastie.ai" className="underline hover:text-gray-500 text-gray-900">Krastie AI</a></p>

            <div className="flex space-x-4 border mt-4 mb-4" />
        </div>
    );
}