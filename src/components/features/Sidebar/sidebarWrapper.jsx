"use client";
import { usePathname } from 'next/navigation';
import React from 'react'
import SideBar from './Sidebar';

function SidebarWrapper() {
    const pathname = usePathname();
    const showPathname = pathname !== '/login';
  return showPathname ? <SideBar /> : null ;
}

export default SidebarWrapper
