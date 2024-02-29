import Image from 'next/image'
import React from 'react'
import { IoBrowsersOutline, IoCalculatorOutline, IoTerminal } from "react-icons/io5"
import { SidebarMenuItem } from './SidebarMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline/>,
        title: 'DashBoard',
        subTitle: 'Visualizacion' 
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculatorOutline/>,
        title: 'Contador',
        subTitle: 'Contador client side' 
    }
];

export const Sidebar = () => {
    return (
        <div
            style={{ width: '350px' }}
            className="bg-slate-100 w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex flex-col relative w-screen">
                <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
                    <div id="logo" className="my-4 px-6">
                        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                            <IoTerminal className= "mr-2" />
                            IS
                            <span className="text-blue-500">Blog</span>.</h1>
                        <p className="text-slate-500 text-sm">UNAH - CUROC</p>
                    </div>
                    <div id="profile" className="px-6 py-10">
                        <p className="text-slate-500">Welcome back,</p>
                        <a href="#" className="inline-flex space-x-2 items-center">
                            <span>
                                <Image
                                    className="rounded-full w-8 h-8"
                                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                                    alt="Profile"
                                    width={50}
                                    height={50} />
                            </span>
                            <span className="text-sm md:text-base font-bold">
                                Edward Tompson
                            </span>
                        </a>
                    </div>
                    <div id="nav" className="w-full px-6">
                        {
                            menuItems.map( (item) => (
                                <SidebarMenuItem 
                                    key={item.path}
                                    path={item.path}
                                    icon={item.icon}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                />
                            ) )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

