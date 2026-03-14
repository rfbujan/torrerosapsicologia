import Link from 'next/link';

export function generateStaticParams() {
    return [{ rest: ['404'] }];
}

export default function CatchAll() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-neutral-800 mb-4">404</h1>
                <p className="text-xl text-neutral-600">Página no encontrada</p>
                <Link href="/" className="mt-8 inline-block px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors">Volver al inicio</Link>
            </div>
        </div>
    );
}
