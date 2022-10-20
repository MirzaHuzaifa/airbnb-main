import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import { textTransform } from '@mui/system';
export default function Topbar() {
  return (
    <div >
      <div
      className="sticky flex flex-wrap justify-between px-10 overflow-hidden border-b-2 -p-2 sm:flex-row sm:flex top align">
        <div>
          <a href='#'>
            <img className='h-20' src='img/Airbnb-logo.png' alt='logo'/>
          </a>
        </div>
        
        <div className='mt-3 '> 
        
          <ButtonGroup  variant="text" 
          color={"primary"} size={"small"} 
          aria-label="small button group" inputlabelprops={{className: "ButtonGroup__color"}}>
          <div className='flex justify-between px-3 py-2 duration-300 ease-in border-2 rounded-full hover:border-r-4 hover:border-b-4'>
            <Button style={{color: "black", padding: "2px 15px", textTransform: "none"} }>Anywhere</Button>
            <Button style={{color: "black", padding: "2px 15px", textTransform: "none"}}>Any week</Button>
            <Button style={{color: "grey", padding: "2px 15px", textTransform: "none"}}>Add guests</Button>
            <div className='p-1 bg-red-500 rounded-3xl'> 
            <img className='p-1 h-7' src='img/search-white.png' alt='logo'/>
            </div>
            </div>
          </ButtonGroup>
        </div>            

        <div className='flex content-center justify-between pt-1'>
            <Button style={{color: "black"}}>Become a Host</Button>
            <img className='h-8 pr-2 mt-6 aign-middle' src='img/browser-remove.png' alt='logo'/> 
            <button className='flex px-2 my-5 duration-300 ease-in border-2 border-gray-200 rounded-full hover:border-r-4 hover:border-b-4'>
            <img className='h-3 pr-2 mt-[10px]' src='img/list.png' alt='logo'/> 
            <img className='mt-[2px] h-7' src='img/pro-logo.png' alt='logo'/>
            </button>
        </div>
      </div>
    </div>
  )
}
