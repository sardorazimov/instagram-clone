import MessagesView from "./src/MessagesMobile"


const page = () => {
    return (
      <div>
        <div className="lg:hidden sm:flex">
          <MessagesView/>
        </div>
      </div>
    )
  }
  
  export default page