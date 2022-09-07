import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center bg-gray-800'>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div>
      <h1 className="py-4 text-gray-100 uppercase lg:text-3xl md:text-2xl sm:text-lg">
        This is a sample main text on the template website {/* (CHANGE IT) */}
      </h1>
      <h1 className="py-2 text-gray-100">
        This is a sample sub text on the template website {/* (CHANGE IT) */}
      </h1>
      <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <button className='bg-gradient-to-r from-cyan-500 to-blue-500 w-40 h-12 rounded-full'>Sample Button 1</button> {/* (CHANGE IT) */}
          <button className='bg-gradient-to-r from-cyan-500 to-blue-500 w-40 h-12 rounded-full'>Sample Button 2</button> {/* (CHANGE IT) */}
      </div>
      </div>
      </div>
      </div>
  )
}

export default Main
