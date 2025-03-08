import React from 'react'
import { BiTask } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { MdAssignmentInd } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { FcPieChart } from "react-icons/fc";

const RightSideBar = () => {
  return (
   <>
   <aside className=' w-1/5  bg-gray-200  pt-4 flex flex-col items-center gap-4 pb-4 absolute right-0'>
    <div className="avatar flex flex-col items-center gap-3">
        <img className='h-[100px] rounded-[50%]'
        src="/passport size photo.jpg" alt="" />
        <h1>Hi Pankaj</h1>
    </div>
    <ul className='bg-white pt-4 pb-4 w-[80%] pl-2 space-y-4'>
        <li className='flex gap-3 items-center hover:bg-gray-200 cursor-pointer'>
            <BiTask/>
            <h1>All Task</h1>
            </li>

            <li className='flex gap-3 items-center hover:bg-gray-200 cursor-pointer '>
            <FaRegCalendarAlt />
            <h1>Today</h1>
            </li>

            <li className='flex gap-3 items-center hover:bg-gray-200 cursor-pointer '>
            <FaRegStar />
            <h1>Important</h1>
            </li>

            <li className='flex gap-3 items-center hover:bg-gray-200 cursor-pointer '>
            <CiMap />
            <h1>Planned</h1>
            </li>

            <li className='flex gap-3 items-center hover:bg-gray-200 cursor-pointer'>
            <MdAssignmentInd />
            <h1>Assigned To Me</h1>
            </li>
    </ul>

    <div className="addlist flex gap-3 items-center bg-white pt-4 pb-4 w-[80%] pl-2">
    <IoMdAdd />
        <h1>Add List</h1>
    </div>

    <div className="TodayTask flex flex-col gap-3 items-center bg-white pt-4 pb-4 w-[80%] pl-2 pr-2">
       
        <div className='flex justify-between gap-20'>
        <h1 className='flex flex-col'>Today Tasks <span>11</span></h1>
        <IoMdInformationCircle />
        </div>
        <FcPieChart  className='text-[150px]'/>
    </div>
   </aside>
   </>
  )
}

export default RightSideBar