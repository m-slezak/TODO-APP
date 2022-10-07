const style = {
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] tp-[#1cb5e0]`
}

function App() {
  return (
    <div className= {style.bg}>
      <div className= {style.container}>
        <h3 className= {style.heading}></h3>
        <form className={style.form}>

        </form>
      </div>
    </div>
  );
}

export default App;
