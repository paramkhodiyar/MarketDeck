import React from "react";
import SplitText from "./SplitText";
import FinancialBackground from "../financialbackground/financialbackground";
import "./landingPage.css";
import ShinyText from './ShinyText';
  
function LandingPage() {
    const handleAnimationComplete = () => {
        console.log('animation check');
    };

    return (
        <>
            <FinancialBackground />
            <div className="content-container">
                <div className="content">
                    <div className="headercontainer">
                        <SplitText
                            text="Smarter Stock Market Analysis"
                            className="split-text"
                            delay={100}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                    <div className="subheadercontainer">
                        <ShinyText text="Track, analyze, and optimize your investments with real-time data and AI-powered insights." disabled={false} speed={3} className='custom-class' />
                    </div>
                    <div className="buttonholder">
                        <button className="dashboardnav">View Dashboard</button>
                        <button className="getstartednav">Get Started</button>

                    </div>
                </div>
                <div className="featurestack">
                    
                </div>
            </div>
        </>
    );
}

export default LandingPage;
