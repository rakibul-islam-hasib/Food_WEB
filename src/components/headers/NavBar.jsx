const navbarData = [
    { label: "Home", url: "/" },
    { label: "Recipes", url: "/recipes" },
    { label: "Blog", url: "/blog" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" }
];

const NavBar = () => {
    return (
        <div className='w-[90%] relative flex justify-between text-white items-center py-4 mx-auto'>
            <div className="">
                <h1 className='text-4xl text-primary md:text-white font-bold' >Flavorful Creations</h1>
            </div>
            <div className="hidden md:block">
                <ul className='flex items-center justify-between gap-4'>
                    {navbarData.map((item, index) => <li key={index} className='font-bold hover:text-red-500 duration-300'>
                        <a href="">{item.label}</a>
                    </li>)}
                    <li>
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-primary px-5 py-2 rounded-full"
                        >
                            Login
                        </button>

                    </li>
                </ul>
            </div>
        </div >
    );
};

export default NavBar;