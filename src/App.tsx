import { Outlet } from "react-router-dom"
import TopHeader from "./components/TopHeader"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import ScrollToTopButton from "./components/ScrollToTopButton"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <Navigation />
      <main className="grow">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
