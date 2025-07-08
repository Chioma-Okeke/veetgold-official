import { cn } from '@/lib/utils'
import React from 'react'

function PaddingContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn('px-5 md:px-10 xl:px-[100px]', className)}>
            {children}
        </div>
    )
}

export default PaddingContainer