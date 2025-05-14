import React from "react";
import SplitText from "./SplitText";
import FinancialBackground from "../financialbackground/financialbackground";
import "./landingPage.css";

function LandingPage() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <>
            <FinancialBackground />
            <div className="content-container">
                <div className="content">
                    <h1>Checkkkkkkkkk</h1>
                    <SplitText
                        text="Param this side !!!"
                        className="split-text"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </div>
            </div>
        </>
    );
}

export default LandingPage;
