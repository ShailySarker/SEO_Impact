import "./SnippetGeneratorResultingToggleOn.css";
import googleLogo from '../../../../../assets/images/Resources/SnippetGenerator/SnippetGeneratorAfterCheck/SnippetGeneratorResultingToggleOn/devicon_google.png';
import infoLogo from '../../../../../assets/images/Resources/SnippetGenerator/SnippetGeneratorAfterCheck/SnippetGeneratorResultingToggleOn/material-symbols_info.png';


const SnippetGeneratorResultingToggleOn = () => {
    return (
        <div>
            <div className="border-2 shadow-xl md:py-12 py-10 md:px-14 px-5 font-medium w-full rounded-2xl flex flex-col md:gap-12 gap-10">
                <div className="flex md:gap-12 gap-4 items-center">
                    <img src={googleLogo} alt="google Logo" />
                    <h4 className="g:text-2xl md:text-xl text-lg font-semibold text-[#999999]">www.google.co.in</h4>
                    <img src={infoLogo} alt="info Logo" />
                </div>
                <div className="flex flex-col md:gap-12 gap-10">
                    <h3 className="text-[#180EA4] font-bold lg:text-4xl md:text-3xl text-2xl">Google</h3>
                    <h4 className="lg:text-2xl md:text-xl text-lg font-semibold text-[#999999]"><span className="font-bold text-black">Gorem </span>ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h4>
                </div>
            </div>
            <div className="mt-20 mb-12">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">Title</h2>
                    <h3 className="lg:text-3xl md:text-3xl text-2xl font-medium text-[#999999]">205/280 Pixel</h3>
                </div>
                <progress
                    className="flex items-center progress customOnBlue-progress h-5 "
                    value="63"
                    max="100"
                ></progress>

            </div>
            <div>
                <input className="border-2 md:py-4 py-3 px-5 md:px-14 font-medium w-full rounded-lg md:text-xl text-lg" type="search" name="" id="" placeholder="Google" disabled />
            </div>
            <div className="mt-20 mb-12">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">Description</h2>
                    <h3 className="lg:text-3xl md:text-3xl text-2xl font-medium text-[#999999]">400/900 Pixel</h3>
                </div>
                <progress
                    className="flex items-center progress customOnBlue-progress h-5 "
                    value="44"
                    max="100"
                ></progress>

            </div>
            <div className="border-2 w-full rounded-lg">
                <h4 className="md:text-xl text-lg md:py-9 py-7 md:px-14 px-5 font-medium text-[#999999]">Lorem ipsum dolor sit amet consectetur. Porttitor sollicitudin at laoreet donec. Non nunc a aliquam elit interdum sociis id. Lacus pellentesque tempus magna ultrices. Velit vel mauris ante volutpat gravida. Sed lectus in mi molestie non. Sit parturient faucibus tristique adipiscing nibh. Tristique aenean vitae id nulla sed erat. Elit amet malesuada tellus lectus. Neque id ut porttitor tellus euismod dictum a risus porttitor. Aliquam elit sapien eget aliquet lectus. Pulvinar arcu sed pellentesque laoreet neque pellentesque in. Amet senectus sit diam porttitor lobortis donec nascetur morbi mauris. Nec eget id leo turpis. Tincidunt purus pretium vel feugiat. Fermentum lobortis enim sit ultrices auctor tempor. Nunc a interdum at nibh pellentesque. Purus blandit laoreet quis at mauris cursus ante vel nulla. Sed condimentum sed ultrices nulla nunc vel pharetra lacus. Est pharetra nascetur quam luctus mattis habitant felis. Facilisis varius in senectus congue consequat mi purus turpis. At tortor sed rhoncus curabitur. Vestibulum aliquam tellus cursus justo ut.
                </h4>
            </div>
        </div>
    );
};

export default SnippetGeneratorResultingToggleOn;