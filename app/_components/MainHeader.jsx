import HeaderUserBar from "./HeaderUserBar"
import SearchBar from "./SearchBar"

function MainHeader() {

    const className = {
        header: ``
    }
  return (
    <header className="">
        <div className="">
            <h2>myh store</h2>
        </div>
        <section className="">
            <SearchBar />
            <HeaderUserBar />
        </section>
    </header>
  )
}

export default MainHeader