import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="logo"
          style={{ width: '50px', height: '50px' }}
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/utkupreti/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/K4rsh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/karshablanca"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors"
        >
          <FaInstagram />
        </a>

        {/* Email */}
        <a
          href="mailto:uupreti@mun.ca"
          className="hover:text-red-400 transition-colors"
        >
          <FaEnvelope />
        </a>

      </div>
    </nav>
  )
}

export default Navbar
