import { useState } from 'react';

const FeedbackUs = () => {

    const [rating, setRating] = useState(5); 
    const [feedback, setFeedback] = useState('');

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

       console.log(`Rating: ${rating}, Feedback: ${feedback}`);

        setRating(5); 
        setFeedback('');
    };

    return (
        <div className="lg:mt-32 md:mt-16 pt-5 mb-36 lg:mx-16 md:mx-16 mx-6 items-center">
            <div className="mb-24">
                <h3 className="text-center font-bold lg:text-5xl md:text-4xl text-3xl md:mb-16 mb-10">Share Your Feedback</h3>
                <p className="lg:text-2xl md:text-xl text-lg text-[#757575] font-semibold lg:mx-36 text-center ">Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus ornare.</p>
            </div>

            <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-3/4 w-full mx-auto bg-[#EBF5FF] border-2 border-[#007BFE] rounded-lg py-16 px-8">
                <div className="mb-10">
                    <label htmlFor="rating" className="block font-semibold text-xl mb-3">
                        Rating
                    </label>
                    <select
                        id="rating"
                        name="rating"
                        className="mt-1 p-2 md:p-3 w-full border border-gray-300 rounded-lg"
                        value={rating}
                        onChange={handleRatingChange}
                    >
                        <option value="1">1 (Poor)</option>
                        <option value="2">2 (Fair)</option>
                        <option value="3">3 (Average)</option>
                        <option value="4">4 (Good)</option>
                        <option value="5">5 (Excellent)</option>
                    </select>
                </div>
                <div className="mb-20">
                    <label htmlFor="feedback" className="block font-semibold text-xl mb-3">
                        Feedback or Message
                    </label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        rows="6"
                        placeholder='Write your feedback ...'
                        className="mt-1 p-2 md:p-3 w-full border border-gray-300 rounded-lg"
                        value={feedback}
                        onChange={handleFeedbackChange}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <button type="submit" className="text-white bg-[#007BFE] md:py-3 md:px-6 p-2 rounded-xl font-semibold ">Submit Feedback</button>
                </div>
            </form>
        </div>
    );
};

export default FeedbackUs;