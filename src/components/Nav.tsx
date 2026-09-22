import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
    <nav className=" bg-white-100">
       <div className="flex justify-between container mx-auto h-20 items-center">
        <div className="h-20 w-auto flex gap-4 items-center"> <img src={Logo} alt="" /></div>
        <ul className="flex gap-4 items-center text-nav-text">
            <li><a href="#" className=" text-nav-home">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div className=" flex items-center gap-4">
        <h2 className="text-nav-signin">Sign In</h2>
        <button className="bg-nav-signup-bg text-nav-signup-text text-px-3 py-1.5 md:px-6 md:py-2.5 rounded-full font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity whitespace-nowrap shadow-md shadow-pink-500/20" >Sign Up</button>
        </div>
        </div>
    </nav>)
    
};

export default Nav;