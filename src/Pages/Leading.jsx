import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import ItsInOurBlood from '../Components/ItsInOurBlood';
import Footer from '../Components/Footer';

const Leading = () => {
    return (
        <div className='font-roboto-condensed'>
            {/* Hero Section */}
            <Hero />
            
            {/* Fire Border between Hero and ItsInOurBlood */}
            <div className="w-full overflow-hidden">
                <div className="relative">
                    <div className="w-full">
                        <video
                            className="w-full object-cover mix-blend-screen"
                            src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>
            
            {/* ItsInOurBlood Section */}
            <ItsInOurBlood />
            
            {/* Fire Border between ItsInOurBlood and Footer */}
            <div className="w-full overflow-hidden">
                <div className="relative">
                    <div className="w-full">
                        <video
                            className="w-full object-cover mix-blend-screen"
                            src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leading;