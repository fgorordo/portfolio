import { PropsWithChildren } from 'react'

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={`mx-4 md:mx-8 lg:mx-32 2xl:mx-40 ${className}`}>
        {children}
    </div>
  )
}