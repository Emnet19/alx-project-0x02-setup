    import React from 'react'
    import Link from 'next/link'
    const Header = () => {
      return (
        <div>
          Link to <Link href="/home">Home</Link>
          <br />
          Link to <Link href="/about">About</Link>
        </div>
      )
    }
    
    export default Header
    