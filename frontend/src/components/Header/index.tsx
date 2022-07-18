import './styles.css'
import logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Logo DS Meta" />
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por:
                <a href="https://www.instagram.com/devsuperior.ig/"> DevSuperior</a>
            </p>
        </div>
    </header>
  )
}

export default Header