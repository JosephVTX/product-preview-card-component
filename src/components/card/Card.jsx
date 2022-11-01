export const Card = () => {
  return (
    <div className='w-[22rem]  bg-white h-[40rem] lg:h-[28rem] lg:w-[38rem] rounded-xl  font-montserrat flex flex-col overflow-hidden lg:flex-row'>
        
        <img src="../image-product-mobile.jpg" className='lg:hidden' alt  />
        <img src="../image-product-desktop.jpg" className='lg:block hidden' alt  />

        <div className='px-5 flex flex-col justify-between h-full py-[1.4rem] lg:w-[20rem] lg:py-[2rem]'>
            
            <p className='tracking-[.3rem] text-[hsl(228,12%,48%)]'>PERFUME</p>

            <h4  className='text-[2rem] font-bold font-fraunces leading-8 lg:pr-[4.75rem]'>Grabielle Essence Eau De Parfum</h4>
            

            <p className='text-[0.9375rem] text-[hsl(228,12%,48%)]'>A floral, solar and voluptous <br /> iterpretation composed by Oliver <br /> Polge, Perfumer-Creator for the House of CHANEL.</p>

           
            <div className='flex items-center gap-4 mb-3'>
                <h4 className="text-[2.2rem] text-[hsl(158,36%,37%)] font-fraunces">$149.99 </h4>
                <p className='line-through text-[hsl(228,12%,48%)]'>$169.99</p>
            </div>
            
            <button className='w-full bg-[hsl(158,36%,37%)] py-4 rounded-[0.625rem] text-white flex justify-center gap-2 items-center'> <img src="/public/icon-cart.svg" aria-hidden='true' alt /> Add to Cart</button>
            
        </div>
    </div>
  )
}
