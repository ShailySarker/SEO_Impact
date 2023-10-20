import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer lg:p-10 p-6 border-t-2  text-base-content ">
            <nav className="flex md:border-r-2 justify-end items-center lg:pr-16 md:pr-12 pr-0 lg:py-24 md:py-8 py-6 ">
                <aside className="flex flex-col items-center justify-center gap-6 pl-10 md:pl-0">

                    <img className="lg:w-60 w-32" src="https://i.ibb.co/LgjTcLv/Group-157.png" alt="" />
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                        <Link><img src="https://i.ibb.co/Gc1rFqk/teenyicons-facebook-solid.png" className="lg:w-11 w-8 lg:h-11 bg-[#EBF5FF] md:p-2 p-1 rounded-full" alt="" /></Link>
                        <Link><img src="https://i.ibb.co/Wg2bGcC/mdi-twitter.png" className="lg:w-11 w-8 lg:h-11 bg-[#EBF5FF] md:p-2 p-1 rounded-full" alt="" /></Link>
                        <Link><img src="https://i.ibb.co/Y3jtCND/teenyicons-instagram-solid.png" className="lg:w-11 w-8 lg:h-11 bg-[#EBF5FF] md:p-2 p-1 rounded-full" alt="" /></Link>
                        <Link><img src="https://i.ibb.co/yNrzH9F/ri-threads-fill.png" className="lg:w-11 w-8 lg:h-11 bg-[#EBF5FF] md:p-2 p-1 rounded-full" alt="" /></Link>
                    </div>
                </aside>
                
            </nav>

            <nav>
                <header className="font-bold mb-2">SEO Impact</header>
                <Link className="mb-2 font-semibold" to='/'>Home</Link>
                <Link className="mb-2 font-semibold" to='/pricing'>Pricing</Link>
            </nav>
            {/* <nav>
                <header className="font-bold mb-2">Social Impact</header>
                <Link className="mb-2 font-semibold" to='/socialImpact/whatIsNew'>What is New?</Link>
                <Link className="mb-2 font-semibold" to='/socialImpact/blogs'>Blogs</Link>
                <Link className="mb-2 font-semibold" to='/socialImpact/clientReview'>Client Review</Link>
                <Link className="mb-2 font-semibold" to='/socialImpact/socialMediaReview'>Social Media Review</Link>
                <Link className="mb-2 font-semibold" to='/socialImpact/FAQs'>FAQs</Link>
            </nav> */}
            <nav>
                <header className="font-bold mb-2">Resources</header>
                <a className="link link-hover mb-2 font-semibold ">Keyword Checker</a>
                <a className="link link-hover mb-2 font-semibold">Ranking Checker</a>
                <a className="link link-hover mb-2 font-semibold">Backlink Checker</a>
                <a className="link link-hover mb-2 font-semibold">Snippet Generator</a>
                <a className="link link-hover mb-2 font-semibold">Keyword Research Tool</a>
            </nav>
            <nav>
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <header className="font-bold mb-3">Contact</header>
                        <Link className="mb-3 font-semibold" to='/about'>About Us</Link>
                        <Link className="mb-3 font-semibold" to='/contact'>Contact us</Link>
                    </div>
                    <div>
                        <button className="py-3 px-7 bg-[#007BFE] text-white rounded-lg font-semibold">Try SEO Impact</button>
                    </div>
                </div>
                <div className="bg-[#EBF5FF] lg:py-7 p-4 rounded-lg lg:px-8 lg:mt-7 mt-4 lg:w-auto md:w-64 ">
                    <h4 className="font-bold lg:mb-9 mb-4">Subscribe to our Newsletter and recommendations</h4>
                    <div className="flex flex-col lg:flex-row  gap-5 justify-center items-center">
                        <input className="lg:px-6 px-3 py-2 rounded-lg" type="text" name="email" id="" placeholder="Enter your email address...." />
                        <button className="font-bold">Send</button>
                    </div>
                </div>
            </nav>

        </footer>
    );
};

export default Footer;