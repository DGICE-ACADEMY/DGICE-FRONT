import React from 'react'
import Head from "next/head";
import Link from 'next/link';
import { NavbarDashboard } from '../Global';

export const DashboardLayout = ({children, title, user:{first_name, last_name}}) => {
    return (
        <>
            <Head>
                <title>{title || "DGICE Academy"}</title>
            </Head>

            <div className='flex box-border '>
                <NavbarDashboard username={`${first_name} ${last_name}`} image={'https://picsum.photos/200/300'}/>
                <main className='p-5 lg:p-10 w-full '>
                    {children}
                </main>
            </div>
        </>
    )
}