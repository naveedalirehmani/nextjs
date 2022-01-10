import React from 'react'
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            Page not found.
            <Link passHref href="/home/login">login</Link>            
            <Link passHref href="/home/signup">signup</Link>            
        </div>
    )
}

export default Index
