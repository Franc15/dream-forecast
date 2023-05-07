import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import moon from '../assets/moon.png'
import land from '../assets/dreamland.png'
import cat from '../assets/cat.gif'
import galaxy from '../assets/galaxy.jpg'
import Navbar from './Navbar'

function Hero() {
    const ref = useRef();

    const [showModal, setShowModal] = React.useState(false);
  const [dreamPrediction, setDreamPrediction] = React.useState("");
    const [dream_text, setDreamText] = React.useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://booleanpundits.maurice.webcup.hodi.host/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: dream_text }),
    });
    const data = await response.json();
    console.log(data);
    setDreamPrediction(data);
  }

    return (
        <>
        <Parallax pages={5} ref={ref} style={{ backgroundColor: '#02040F' }}>
            <ParallaxLayer offset={0} sticky={{ start: 0, end: 1 }}>
                <Navbar />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={2}
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(2, 4, 15, 1), rgba(2, 4, 15, 0)), url(${galaxy})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="bg-[url('./assets/moon.png')] bg-contain bg-center bg-no-repeat w-[100%] lg:w-[50%] h-[50%] lg:h-[50%] absolute -top-10 -z-20 left-1/2 transform -translate-x-1/2"></div>

            </ParallaxLayer>

            <ParallaxLayer
                offset={0.32}
                speed={0.01}
            >
                <div className=" text-3xl lg:text-9xl text-[#f18f01] absolute top-16 lg:top-0 -z-10 left-1/2 transform -translate-x-1/2 font-black lg:font-extrabold tracking-[2rem] font-poppins">ONYRIX</div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0.2}
                speed={1}
                factor={2}
            >
                <div className="bg-[url('./assets/cloud1.png')] bg-contain bg-center bg-no-repeat w-[60%] h-[40%] absolute -top-20 lg:top-10 right-5 lg:right-10 z-50"></div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0.2}
                speed={1}
                factor={2}
                horizontal={true}
            >
                <div className="bg-[url('./assets/cloud1.png')] bg-contain bg-center bg-no-repeat w-[30%] lg:w-[60%] h-[30%] lg:h-[40%] absolute -top-12 lg:top-10 lg:right-10 z-50"></div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0.37}
                speed={1}
                factor={2}
            >
                <div className="bg-[url('./assets/cloud5.png')] bg-contain bg-center bg-no-repeat w-[50%] h-[30%] absolute -top-36 lg:top-0 left-2 lg:left-5 z-20"></div>

            </ParallaxLayer>

            <ParallaxLayer
                sticky={{ start: 1, end: 3.9 }}
                style={{ display: 'flex', justifyContent: 'center', }}
            >
                <img src={cat} className='flex justify-center h-[30%] lg:h-[50%]' />
            </ParallaxLayer>

            <ParallaxLayer offset={2}>
                <h1 className="text-lg mb-4 font-light text-center tracking-wide lg:tracking-[1rem] font-poppins text-[#f18f01]">READY TO EXPLORE YOUR DREAMS?</h1>
                <p className='text-[#F4F4F6] text-center font-extralight font-poppins leading-8 tracking-wider'>Submit your dream descriptions and receive personalized premonitory predictions about upcoming events</p>
            </ParallaxLayer>

            <ParallaxLayer offset={2.3}>
                <div className="grid lg:grid-cols-2 gap-16 mx-auto lg:px-12 w-10/12 text-[#F4F4F6] font-poppins">
                    <div className=" bg-zinc-400/0 p-6 shadow-md shadow-[#f18f01] rounded-3xl border border-[#f18f01] border-opacity-30">
                        <h1 className="text-2xl mb-4 font-semibold text-center tracking-wide">International Institute of Dreams</h1>
                        <p className='font-extralight leading-8 tracking-wider'>What if your dreams could predict the future? It may sound like science fiction, but it's not.
                            Thanks to years of research and development,
                            our team of scientists at the International Institute of Dreams have made an amazing discovery that could change
                            the way we see the world.</p>
                        <p className='font-extralight leading-8 tracking-wider'>At the International Institute of Dreams, we are committed to helping people harness the power of their dreams.
                            Join us on this journey and discover the key to your destiny.</p>
                    </div>
                    <div className=" bg-zinc-400/0 p-6 shadow-md shadow-[#f18f01] rounded-3xl border border-[#f18f01] border-opacity-30">
                        <h1 className="text-2xl mb-4 font-semibold text-center tracking-wide">Onyrix</h1>
                        <p className='font-extralight leading-8 tracking-wider'>An advanced artificial intelligence that can analyze and decode users' dreams to predict their future.
                            Our revolutionary technology can predict situations such as a romantic encounter, problems with coworkers,
                            school difficulties, or even serious illnesses.</p>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3.1}>
                <div className='absolute ml-[50%] transform -translate-x-1/2 text-center top-2/4 lg:top-0'>
                    <h1 className="text-lg mb-4 font-light tracking-[1rem] font-poppins text-[#ff2600]"># Note</h1>
                    <p className='text-[#F4F4F6] font-extralight font-poppins leading-8 tracking-wider'>
                        It is advisable to seek professional help should you be experiencing recurring nightmares.</p>
                </div>


            </ParallaxLayer>

            <ParallaxLayer
                offset={4}
                speed={1}
                factor={1}
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2, 4, 15, 1), rgba(2, 4, 15, 0)), url(${land})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <h1 className=" text-2xl lg:text-4xl text-center mx-auto w-[90%] lg:w-[50%] mt-[60%] lg:mt-[20%] text-[#F4F4F6] font-bold tracking-wider font-poppins">
                    Submit your dream description now and let Onyrix reveal your future...</h1>
            </ParallaxLayer>

            <ParallaxLayer
                offset={4.6}
                speed={0.2}
            >
                <button type='button' className='font-poppins rounded-xl w-[50%] lg:w-[20%] mt-0 lg:mt-16 ml-[50%] transform -translate-x-1/2 bg-[#f18f01] hover:bg-yellow-500 p-2 lg:p-4 text-[#F4F4F6] text-2xl flex justify-center items-center'>
                    Try Now</button>
            </ParallaxLayer>


        </Parallax>
        
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Orinix - Predict your Dreams
                  </h3>
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <form onSubmit={onSubmit}>
                        <label for="dream_text" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Your dream</label>
                        <textarea id="dream_text" name="dream_text" rows="4" class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your dream here..." onChange={ (e) => setDreamText(e.target.value) } ></textarea>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Predict my Dream
                        </button>
                    </form>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {dreamPrediction ? dreamPrediction?.data?.prediction : "Your dream prediction will appear here"}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </>
    )
}

export default Hero