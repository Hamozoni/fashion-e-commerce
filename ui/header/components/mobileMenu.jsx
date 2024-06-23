import { TiThMenuOutline } from "react-icons/ti";
const MobileMenu = () => {

    const className = {
        menuContainer: '',
    }
  return (
    <section>
        <h3>
            <TiThMenuOutline size={22} />
        </h3>
        <div className={className.menuContainer}>
            
        </div>
    </section>
  )
}

export default MobileMenu