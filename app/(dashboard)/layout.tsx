import MobileNav from "@/components/shared/MobileBar"
import MobileHeader from "@/components/shared/MobileHeader"
import Sidebar from "@/components/shared/sidebar"


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex-col flex">
       <Sidebar/>
       <section className="lg:pl-72 "> {children}
        <MobileNav/>
       </section>
    </main>
  )
}

export default Layout