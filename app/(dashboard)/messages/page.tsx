import DesektopMessage from "./src/DesektopMessage"
import MessagesView from "./src/MessagesMobile"


const page = () => {
    return (
      <div>
        <div className="lg:hidden sm:flex">
          <MessagesView/>
        </div>
        <DesektopMessage/>
      </div>
    )
  }
  
  export default page