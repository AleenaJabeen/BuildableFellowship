import React from 'react'
import Nav from './Nav'
import Header from './Header';
import Meta from './Meta';

function Layout({children}) {
  return (
    <>
    <Meta/>
    <Nav/>
    <Header/>
    <div className='py-4'>

    {children}  
    </div>
    </>
  )
}

export default Layout
