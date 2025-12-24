import React from 'react'

const LoadingPage = () => {
  return (
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center z-[100] bg-white text-black`}
    >
      <div className="flex flex-col items-center ">
        <div className="w-15 h-15 flex justify-center items-center">
          <div className="shapes-5"></div>
        </div>
        <div className="text-[1.2rem] font-nunito font-bold flex items-center gap-2 mt-2">
          <span>Chờ xíu....... ^_^</span>
          <i className="fa-solid fa-hand"></i>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
