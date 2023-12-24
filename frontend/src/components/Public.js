import { Link } from 'react-router-dom'
import publicImage1 from '../img/public-image1.png';

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Huddl!</span></h1>
            </header>
            <main className="public__main">
                <h1>Your New HQ</h1>
                <img className="public__image1" src = {publicImage1} alt="None"></img>
            </main>
            <footer>
                <Link to="/login">Member Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public