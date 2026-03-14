export default function CookiesPage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary-dark">Política de Cookies</h1>
            <div className="prose prose-lg text-gray-700 space-y-6">
                <p>El Centro Torre Rosa utiliza cookies en www.torrerosapsicologia.com para garantizar el correcto funcionamiento del sitio, facilitar la navegación y recopilar información estadística. En esta política explicamos qué son, qué tipo de cookies utilizamos y cómo puede gestionarlas.</p>

                <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">1. ¿Qué son las cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador cuando usted los visita. Estos archivos permiten que el sitio web recuerde sus preferencias de idioma, inicio de sesión o recopilar métricas sobre el tráfico y uso de la web.</p>

                <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">2. Cookies utilizadas en esta web</h2>
                <p>Este sitio web utiliza principalmente las siguientes cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cookies Técnicas / Estrictamente Necesarias:</strong> Permiten la navegación a través de la web y el acceso a áreas seguras o la gestión del consentimiento (ejemplo, la cookie que guarda si ha aceptado este banner). Su uso no requiere del consentimiento del usuario al amparo del artículo 22 de la LSSI.</li>
                    <li><strong>Cookies de Personalización:</strong> Permiten mantener la sesión y las preferencias de idioma elegidas por el usuario.</li>
                    <li><strong>Cookies de Análisis (Terceros):</strong> Podemos integrar sistemas analíticos para contabilizar de forma anónima cuántos visitantes recibimos y desde dónde.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">3. ¿Cómo desactivar las cookies?</h2>
                <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de Internet.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
                    <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad.</li>
                    <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
                </ul>
                <p>Tenga en cuenta que si desactiva ciertas cookies, es posible que algunas funcionalidades de la página web no funcionen correctamente.</p>

                <h2 className="text-2xl font-semibold text-primary-dark mt-8 mb-4">4. Actualizaciones</h2>
                <p>Es posible que actualicemos la Política de Cookies de nuestro sitio web. Por ello, le recomendamos revisar esta política periódicamente para estar adecuadamente informado sobre cómo y para qué usamos las cookies.</p>

                <p className="text-sm mt-12 text-gray-500 italic">Última actualización: Marzo 2026</p>
            </div>
        </main>
    );
}
