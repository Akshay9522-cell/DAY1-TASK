

export default function Contact(){

     return(
        <>
        <div className="border-x-orange-200 display flex justify-evenly shadow-2xl " id="contact">
            <div className="w-screen">
                <img src="/images/c6.png" alt="" className="w-3/5" />
            </div>

            <div className="display flex flex-col gap-4 shadow-2xl w-2/4 p-6 "  >
                 <input type="text" placeholder="Full Name" className="shadow-lg" /> <br />
                 <input type="email" placeholder="E-mail" className="shadow-lg" /> <br />
                 <input type="text" placeholder="Message" className="shadow-lg" /> <br />

                 <button className="bg-indigo-400">Contact Us</button>
            </div>
        </div>
        </>
     )
}