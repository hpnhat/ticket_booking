import React, { useEffect, useState } from 'react'

const useResizeMobile = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return isMobile
}

export default useResizeMobile