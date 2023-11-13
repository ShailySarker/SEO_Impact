import React, { Suspense, useState } from "react";
const SnippetGeneratorResultingToggleOn = React.lazy(() => import("./Components/SnippetGeneratorResultingToggleOn"));
const SnippetGeneratorResultingToggleOff = React.lazy(() => import("./Components/SnippetGeneratorResultingToggleOff"));
const SnippetGeneratorHeader = React.lazy(() => import("./Components/SnippetGeneratorHeader"));
import "./SnippetGeneratorAfterCheck.css";
import ComponentLazyLoaderDesign from "../../../../components/ComponentLazyLoaderDesign/ComponentLazyLoaderDesign";

const SnippetGeneratorAfterCheck = () => {

    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="mt-12 md:mx-16 mx-6 mb-28">
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <SnippetGeneratorHeader />
            </Suspense>
            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                <div className="mt-28 flex  flex-col-reverse gap-28">
                    <div >
                        <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center mb-16">Keyword</h3>
                        <input className="border-2 md:py-4 py-3 px-5 md:px-14 font-medium w-full rounded-lg md:text-xl text-lg" type="search" name="" id="" placeholder="Google" disabled />

                        <div className="my-20 flex justify-center items-center gap-16 ">
                            <input type="checkbox"
                                checked={isChecked}
                                onChange={handleToggle}
                                className="toggle custom-toggle" />
                            <p className=" lg:text-5xl md:text-4xl text-3xl font-medium">Date</p>
                        </div>
                    </div>
                    <div>
                        {isChecked ?
                            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                                <SnippetGeneratorResultingToggleOn />
                            </Suspense> :
                            <Suspense fallback={<ComponentLazyLoaderDesign />}>
                                <SnippetGeneratorResultingToggleOff />
                            </Suspense>
                        }
                    </div>
                </div>
            </Suspense>

        </div>
    );
};

export default SnippetGeneratorAfterCheck;