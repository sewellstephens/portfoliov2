import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <Link href="/" className="text-lg mt-4 text-gray-900 hover:text-gray-600 underline">
                Back to home
            </Link>

            <div className="flex space-x-4 border mt-4 mb-4" />
        </div>
    );
}