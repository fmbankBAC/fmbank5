import React from "react";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-white to-slate-100 text-slate-900">
      {/* Hero Section */}
      <section className="w-full text-center py-20 px-4 bg-white shadow-md">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to F&M Bank</h1>
        <p className="text-xl max-w-3xl mx-auto">
          The digital-first bank that speaks crypto, operates with trust, and builds your financial future.
        </p>
        <p className="mt-6 text-yellow-600 text-sm">
          ⚠️ Our web platform is being updated. All services are available via the mobile app.
        </p>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">Retail & Corporate Banking</h2>
          <p>
            Secure accounts, smart payments, lending, and enterprise-grade treasury tools.
            Whether you're an individual or a multinational, we’ve got you covered.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">Digital Asset Solutions (BAC)</h2>
          <p>
            Discover BAC — our gateway to Bitcoin and crypto investments, built with compliance, custody, and risk in mind. Coming soon.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">Innovation & Compliance</h2>
          <p>
            Cutting-edge doesn't mean cutting corners. We deliver innovation under strict regulatory frameworks, ensuring security, transparency, and performance.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">One Platform, Total Control</h2>
          <p>
            Our unified dashboard provides seamless access to all your financial tools, fiat or crypto — all under one secure login.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-50 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Daniele [Cognome]</h3>
            <p className="text-sm italic text-gray-600 mb-4">Chief Innovation Officer</p>
            <p>
              With over 20 years of banking experience — from branch director to high-level strategic advisor — Daniele leads innovation at F&M Bank, building bridges between traditional finance and the digital asset ecosystem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
