import ChatHistory from '../../components/ChatHistory';

export default function Page() {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p>Email: <a href="mailto:tv@tiagovindima.com" className="text-blue-500">tv@tiagovindima.com</a></p>
        <p>Phone: <a href="tel:+351910377268" className="text-blue-500">+351 910 377 268</a></p>
      </div>
      
      <ChatHistory />
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Envie uma nova mensagem</h2>
        <form className="space-y-2">
          <input type="text" placeholder="Name" className="border p-2 w-full" />
          <input type="email" placeholder="Email" className="border p-2 w-full" />
          <textarea placeholder="Message" className="border p-2 w-full"></textarea>
          <button type="submit" className="bg-black text-white px-4 py-2">Send</button>
        </form>
      </div>
    </div>
  );
}
