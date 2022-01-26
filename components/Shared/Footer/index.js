// import "./footer.css"

export default function Footer(){
  // javascript
  return(
    <section>
      <div className="mt-96 bg-primeira">
        <div className="grid grid-cols-4 ">
          <div></div>
          <div>
            <div className="text-terceira font-bold text-2xl">The Movie</div>
            <p className="mt-2 text-white max-w-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <div className="mt-7">
            <p className="mt-2 text-white max-w-xs">aaaa</p>
            <p className="mt-2 text-white max-w-xs">aaaa</p>
            <p className="mt-2 text-white max-w-xs">aaaa</p>
            <p className="mt-2 text-white max-w-xs">aaaa</p>
          </div>
          <div>C</div>
        </div>
        <img src="/Detalhe.svg" alt="detalhe" className="w-full bg-primeira"/>
      </div>
    </section>
  )
}