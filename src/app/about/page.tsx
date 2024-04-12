import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col items-center bg-ghost-white">
      <h2 className="mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-gray-800">
        About Sentiment Analyzer
      </h2>
      <p className="m-4 md:w-1/2 p-2 md:p-4 font-sans text-justify text-slate-800 border border-gray-700 rounded-lg bg-slate-100 border-none">
        <span className="font-semibold">Sentiment Analyzer</span> is a
        state-of-the-art application that deciphers and visualizes the emotional
        undertones of textual content. Our platform harnesses the power of
        Hugging Face cutting-edge text classification models to conduct
        sentiment analysis in real-time, transforming words into a compelling
        visual story.
        <br />
        <br />
        At the heart of Sentiment Analyzer lies a robust text analysis engine
        powered by Hugging Face machine learning algorithms. It precisely
        determines the sentiment of user input across various forms of text,
        such as tweets, reviews, or personal notes. Our application evaluates
        the emotional tone and instantly provides feedback with clear sentiment
        labels and corresponding emojis, offering users an immediate
        understanding of their texts emotional impact.
        <br />
        <br />
        But Sentiment Analyzer goes beyond mere analysis. It dynamically alters
        the background color to align with the detected sentiment, creating an
        immersive experience that reflects the users mood. This feature not only
        enhances the visual appeal but also aids in the understanding of the
        sentiment conveyed.
        <br />
        <br />
        Our application is perfect for individuals seeking to gain insights into
        the emotional undertones of their writing or businesses aiming to
        understand customer sentiment.
        <br />
        <br />
        <span className="text-2xl font-bold text-slate-800">Here how it works:</span>
        <br /><br />
        <strong>1. Input Text:</strong><br />Visit our platform and find the text
        input area. Type or paste the text you want to analyze. You can enter
        anything from tweets and reviews to personal notes.
        <br />
        <strong>2. Instant Analysis:</strong><br />As soon as you start typing, our
        system will begin analyzing the sentiment. No need to submit or wait;
        its real-time!
        <br />
        <strong>3. Visual Feedback:</strong><br />Look for clear sentiment labels and
        corresponding emojis. They will provide immediate insights into the
        emotional impact of your text.
        <br />
        <strong>4. Background Color:</strong><br />Notice how the background color
        dynamically changes? It aligns with the detected sentiment, enhancing
        both aesthetics and understanding.
        <br />
        <strong>5. Benefit:</strong><br />Whether you here an individual seeking
        emotional insights or a business aiming to understand customer
        sentiment, Sentiment Analyzer has you covered.
        <br />
        <br />

        <span className="font-semibold">Sentiment Analyzer</span> is committed
        to delivering a seamless and engaging user experience. We continuously
        strive to improve our technology to ensure the highest accuracy and
        relevance in sentiment analysis.
        <br />
        <br />
        Discover the emotional depth of your words with Sentiment Analyzer —
        where text meets emotion.
      </p>
    </div>
  );
};

export default page;
