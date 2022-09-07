import React from 'react'

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 bg-gray-700">
    <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#00ff00]">About Section</p>
            <h2 className="py-4">Sample text</h2> {/* (CHANGE IT) */}
            <p className="py-2 text-gray-100 text-2xl">
                First sample content in about me section. {/* (CHANGE IT) */}
                </p> 
                <p className='py-2 text-gray-200 text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus accusantium aliquid ea? Tenetur minima, aliquid fugit doloremque nesciunt eveniet quos delectus eum velit quae sint rem nemo. Dolores, excepturi dolorem? {/* (CHANGE IT) */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aliquid sit, nemo culpa tenetur officia soluta maxime distinctio dolor blanditiis magnam aut sed deserunt? Repellat natus ipsa vel optio laboriosam! {/* (CHANGE IT) */}
                
            </p>
    </div>
</div>
</div>
  )
}

export default About
