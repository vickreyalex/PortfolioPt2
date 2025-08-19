import Layout from "./Layout";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm -z-10"></div>
      {/* Your app content */}
      <Layout />
    </div>
  );
}

export default App;
