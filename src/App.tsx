import "./App.css";

function App() {
  return (
    <>
      <nav className='bg-gray-300'>
        <div className='flex justify-between items-center mx-8 uppercase'>
          <img src='/assets/logo.png' alt='logo' width={170} height={60} />

          <div className='flex gap-6'>
            <p>Home</p>
            <p>About</p>
            <p>Destinations</p>
          </div>
        </div>
      </nav>
      <div className='relative bg-[#191919] h-screen w-full'>yo</div>{" "}
    </>
  );
}

export default App;
