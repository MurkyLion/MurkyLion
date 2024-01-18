import menuIcon from '../assets/img/monitor.png'
import arrow from '../assets/img/jugar.png'

export default function Header() {

    return( 
        <>
            <section className="w-full h-screen flex flex-col items-center bg-yellow">
               
                <div className="w-full h-1/6">
                    <img src={menuIcon} className='h-10'/>
                </div>

                <div className="w-full h-5/6 flex flex-col items-center justify-between">
                    <h1 className="text-6xl text-black text-center">TURBIO LEON</h1>
                    <div className='w-20 h-10 rounded-t-full bg-black flex justify-center items-center'>
                        <img src={arrow} className='w-7 invert rotate-90'/>
                    </div>
                </div>

            </section>
        </>
    )
}