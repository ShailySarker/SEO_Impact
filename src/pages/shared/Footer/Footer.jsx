import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 border-t-2  text-base-content ">
            <nav className="flex border-r-2 justify-end items-center pr-16 py-24">
                <aside className="flex flex-col items-center justify-center gap-6">

                    <img className="w-60" src="https://i.ibb.co/LgjTcLv/Group-157.png" alt="" />
                    <div className="flex gap-4">
                        <Link><img src="https://i.ibb.co/Gc1rFqk/teenyicons-facebook-solid.png" className="w-11 h-11 bg-[#EBF5FF] p-2 rounded-full" alt="" /></Link>
                        <Link><img src="https://i.ibb.co/Wg2bGcC/mdi-twitter.png" className="w-11 h-11 bg-[#EBF5FF] p-2 rounded-full" alt="" /></Link>
                        <Link><img src="https://i.ibb.co/Y3jtCND/teenyicons-instagram-solid.png" className="w-11 h-11 bg-[#EBF5FF] p-2 rounded-full" alt="" /></Link>
                        <Link><img src="https://i.ibb.co/yNrzH9F/ri-threads-fill.png" className="w-11 h-11 bg-[#EBF5FF] p-2 rounded-full" alt="" /></Link>
                    </div>
                </aside>
                
            </nav>

            <nav>
                <header className="font-bold mb-2">SEO Impact</header>
                <Link className="mb-2" to='/'>Home</Link>
                <Link className="mb-2" to='/pricing'>Pricing</Link>

            </nav>
            <nav>
                <header className="font-bold mb-2">Resources</header>
                <a className="link link-hover mb-2 ">Keyword Checker</a>
                <a className="link link-hover mb-2">Ranking Checker</a>
                <a className="link link-hover mb-2">Backlink Checker</a>
                <a className="link link-hover mb-2">Snippet Generator</a>
                <a className="link link-hover mb-2">Keyword Research Tool</a>
            </nav>
            <nav>
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <header className="font-bold mb-3">Contact</header>
                        <Link className="mb-3" to='/about'>About Us</Link>
                        <Link className="mb-3" to='/contact'>Contact us</Link>
                    </div>
                    <div>
                        <button className="py-3 px-7 bg-[#007BFE] text-white rounded-lg font-semibold">Try SEO Impact</button>
                    </div>
                </div>
                <div className="bg-[#EBF5FF] py-7 rounded-lg px-8 mt-7">
                    <h4 className="font-bold mb-9">Subscribe to our Newsletter and recommendations</h4>
                    <div className="flex gap-5">
                        <input className="px-6 py-2 rounded-lg" type="text" name="email" id="" placeholder="Enter your email address...." />
                        <button className="font-bold">Send</button>
                    </div>

                </div>
            </nav>

        </footer>
    );
};

export default Footer;