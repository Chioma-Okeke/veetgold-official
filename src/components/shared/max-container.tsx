import { cn } from '@/lib/utils'
import React from 'react'

function MaxContainer({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={cn('w-full max-w-[1240px] mx-auto', className)}>
        {children}
    </div>
  )
}

export default MaxContainer