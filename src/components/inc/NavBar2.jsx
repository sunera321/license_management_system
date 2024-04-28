import logo from '../asserts/Media/hsenid.png'

function Navbar2() {
    return (
        <nav className="flex items-center justify-between h-40 px-4  bg-body-tertiary">
            {/* Add a spacer to push the logo to the right corner */}
            <div></div>
            <a className="navbar-brand" href="#">
                <img className='w-64 h-auto ' src={logo} alt="Hsenid" />
            </a>
        </nav>
    );
}

export default Navbar2;
