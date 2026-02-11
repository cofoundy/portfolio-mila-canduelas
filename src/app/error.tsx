"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Portfolio error:", error);
  }, [error]);

  const isNetworkError =
    error.message.includes("fetch") || error.message.includes("network");

  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-black text-white p-8">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">¡Ups! Algo salió mal</h1>

        {isNetworkError ? (
          <p className="text-gray-300 mb-6">
            Parece que hay un problema de conexión. Por favor verifica tu
            conexión a internet e intenta de nuevo.
          </p>
        ) : (
          <p className="text-gray-300 mb-6">
            Ocurrió un error inesperado al cargar el portafolio.
          </p>
        )}

        <div className="space-y-3">
          <button
            onClick={() => reset()}
            className="w-full px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
          >
            Reintentar
          </button>

          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition-colors"
          >
            Recargar Página
          </button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-400 hover:text-white">
              Error Details (Development)
            </summary>
            <pre className="mt-2 p-3 bg-gray-900 rounded text-xs text-red-300 overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
