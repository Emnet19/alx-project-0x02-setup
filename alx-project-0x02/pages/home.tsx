import React from 'react'
import Card from '@/components/common/Card'
const home = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        title="Welcome to Our Platform" 
        content="This platform helps you manage tasks efficiently." 
      />
      <Card 
        title="About Us" 
        content="We are a team dedicated to building scalable applications." 
      />
      <Card 
        title="Contact" 
        content="Reach out via email at support@example.com." 
      />
    </div>
  )
}

export default home
