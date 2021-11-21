import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <div className="font-custom">
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout