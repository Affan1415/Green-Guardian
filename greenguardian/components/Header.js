import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-green-600">GreenGuardian</h1>
            <nav>
                <Link href="/dashboard">
                    Go to Console
                </Link>
            </nav>
        </header>
    );
};

export default Header;
