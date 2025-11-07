export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p>Email: <a href="mailto:tv@tiagovindima.com" className="text-blue-500">tv@tiagovindima.com</a></p>
      <p>Phone: <a href="tel:+351910377268" className="text-blue-500">+351 910 377 268</a></p>
      <form className="space-y-2 mt-4">
        <input type="text" placeholder="Name" className="border p-2 w-full" />
        <input type="email" placeholder="Email" className="border p-2 w-full" />
        <textarea placeholder="Message" className="border p-2 w-full"></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2">Send</button>
      </form>
    </div>
  );
}
