import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6 
          bg-cyan-900 text-secondary-foreground 
          p-3 rounded-full shadow-lg 
          hover:bg-secondary/90 transition-colors
          flex items-center justify-center
          z-50 cursor-pointer
        "
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  )
}
