import React, {useEffect, useState} from 'react'
import {AiOutlineDownload} from 'react-icons/ai'
import { isAndroid,
  isIOS } from "get-os-name";


const DownloadButton = () => {
  const [link, setLink] = useState('')

  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    if(isAndroid()) {
      setLink('https://play.google.com/store/apps/details?id=com.paprclip.bottomstreet')
    } else if (isIOS()){
      setLink('https://apps.apple.com/in/app/bottomstreet-markets-today/id1658981920')
    } else {
      setLink('#cta')
    }
  }, [])

  const handleClick = (e) => {
    if(link === '#cta'){ 
      e.preventDefault()
      showModal ? setShowModal(false) : setShowModal(true)
    }
  }

  return (
    <>
    <a onClick={handleClick} href={link}>
      <div className='flex items-center bg-blue px-5 py-3 rounded-md cursor-pointer hover:bg-[#0044FF] w-fit'>
        <AiOutlineDownload className='text-[25px] text-white'/>
        <p className='text-white font-semibold text-[14px] pl-3'>Download for free</p>
      </div>
    </a>
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
                  <h3 className="text-[24px] font-semibold">
                    Scan QR Code to Download
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right mt-[-10px] leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-slate-500 h-6 w-6 text-[40px] block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="grid grid-cols-2 w-[600px]">
                  <div className='p-[30px]'>
                    <img className='mb-[20px]' src='/playStore.png' width={160}/>
                    <img src='/playstore_qr.png' className='m-auto'/>
                  </div>
                  <div className='p-[30px]'>
                    <img className='mb-[20px]' src='/appStore.png' width={160}/>
                    <img src='/appstore_qr.png' className='m-auto'/>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default DownloadButton