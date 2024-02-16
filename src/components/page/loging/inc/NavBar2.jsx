import logo from '../../../../Images/Loging_asserts/media/hsenid.png';

function Navbar2() {
    return (
        <nav className="flex items-center justify-between h-10 px-4 bg-body-tertiary">
            {/* Add a spacer to push the logo to the right corner */}
            <div></div>
            
                <img className='w-40 h-20 ' src={logo} alt="Hsenid" />
            
        </nav>
    );
}

export default Navbar2;
