import menuIcon from '../assets/img/monitor.png'

export default function Header() {

    return( 
        <>
            <section className="w-screen h-screen flex flex-col items-center ">
               
                <div className="w-full h-1/8 flex flex-row justify-end">
                    <img src={menuIcon} className='h-10'/>
                </div>

                <div className="w-full h-7/8 flex justify-center items-center">
                    <h1 className="text-4xl">TURBIO LEON</h1>
                </div>

            </section>
        </>
    )
}