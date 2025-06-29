import React from 'react'

function MaxContainer({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full max-w-[1240px] mx-auto'>
        {children}
    </div>
  )
}

export default MaxContainer