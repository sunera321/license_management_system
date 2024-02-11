import logo from '../asserts/Media/hsenid.png'

function Navbar2() {
    return (
        <nav className=" bg-body-tertiary h-40 flex items-center justify-between px-4">
            {/* Add a spacer to push the logo to the right corner */}
            <div></div>
            <a className="navbar-brand" href="#">
                <img className=' h-auto  w-64' src={logo} alt="Hsenid" />
            </a>
        </nav>
    );
}

export default Navbar2;
