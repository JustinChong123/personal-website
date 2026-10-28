import { useEffect } from 'react'

// Always open the page at the top, including after a refresh (browsers normally restore the old scroll position)
function useScrollToTopOnLoad() {
    useEffect(() => {
        const previous = window.history.scrollRestoration
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
        return () => { window.history.scrollRestoration = previous }
    }, [])
}

export default useScrollToTopOnLoad
