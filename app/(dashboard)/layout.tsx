import MobileNav from "@/components/shared/MobileBar"
import Sidebar from "@/components/shared/sidebar"


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
       <Sidebar/>
       <section className="lg:pl-72"> {children}
        <MobileNav/>
       </section>
    </main>
  )
}

export default Layout