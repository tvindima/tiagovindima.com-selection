export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl uppercase mb-8">Our Team</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-gray-700 p-6">
          <h2 className="text-xl uppercase mb-2">Tiago Vindima</h2>
          <p className="text-gray-400">Fundador &amp; Consultor Imobiliário</p>
          <p className="mt-4 text-gray-300">
            Especialista em imóveis de luxo com vasta experiência no mercado imobiliário português.
          </p>
        </div>
      </div>
    </div>
  );
}
