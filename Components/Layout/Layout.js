import Header from "../Carousel/Carousel"
import NavHead from "../NavHead/NavHead"

// import NavBar from "Components\NavBar\NavBar";
const Layout = ({children} ) => (
<>
<NavHead/>

<main>{children}</main>
</>
)
   export default Layout