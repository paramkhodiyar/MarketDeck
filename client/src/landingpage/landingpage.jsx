import React from "react";
import SplitText from "./SplitText";
import FinancialBackground from "../financialbackground/financialbackground";
import "./landingPage.css";
import ShinyText from './ShinyText';
import TiltedCard from './TiltedCard';
import Footer from "../footer/footer";
import { FaChartLine, FaSearch, FaBriefcase, FaChartBar} from 'react-icons/fa';
import { HiOutlineChip } from "react-icons/hi";
import { BsBookmarkCheckFill } from "react-icons/bs";

function LandingPage() {
    const handleAnimationComplete = () => {
        console.log('animation check');
    };

    const featureCards = [
        {
            title: "Live Stock Tracking",
            description: "Access live stock prices and trends to make informed decisions quickly.",
            icon: <FaChartLine size={50} color="white" />,
            bgGradient: "linear-gradient(135deg, #0038FF 0%, #5D00B3 100%)",
            link: "https://img.freepik.com/premium-photo/rising-stock-market-graph-showing-upward-trend-stock-prices-symbolizing-financial-growth-positive-market-performance-investment-success-ideal-themes-economic-progress_1080238-6402.jpg"
        },
        {
            title: "Smart Search",
            description: "Find stocks quickly with our intelligent search functionality.",
            icon: <FaSearch size={50} color="white" />,
            bgGradient: "linear-gradient(135deg, #27005D 0%, #460082 100%)"
        },
        {
            title: "Custom Watchlists",
            description: "Create and manage watchlists for your favorite stocks.",
            icon: <BsBookmarkCheckFill size={50} color="white" />,
            bgGradient: "linear-gradient(135deg, #0077FF 0%, #002E9D 100%)"
        },
        {
            title: "Portfolio Management",
            description: "Track your investments, calculate gains/losses, and analyze performance.",
            icon: <FaBriefcase size={50} color="white" />,
            bgGradient: "linear-gradient(135deg, #005F73 0%, #00394D 100%)"
        },
        {
            title: "Historical Charts",
            description: "View detailed historical data with interactive charts.",
            icon: <FaChartBar size={50} color="white" />,
            bgGradient: "linear-gradient(135deg, #001D3D 0%, #003566 100%)"
        },
        {
            title: "Trend Analysis",
            description: "Get AI-powered sentiment analysis and trend predictions.",
            icon: <HiOutlineChip size={50} color="white" />,
            bgGradient: "linear-gradient(135deg, #3F0071 0%, #610094 100%)"
        },
    ];

    return (
        <div className="landing-page">
            <FinancialBackground />

            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-heading">
                        <SplitText
                            text="Smarter Stock Market Analysis"
                            className="hero-title"
                            delay={100}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>

                    <div className="hero-subtitle">
                        <ShinyText
                            text="Track, analyze, and optimize your investments with real-time data and AI-powered insights."
                            disabled={false}
                            speed={5}
                            className="shiny-subtitle"
                        />
                    </div>

                    <div className="hero-buttons">
                        <button className="btn btn-primary">View Dashboard</button>
                        <button className="btn btn-secondary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="features-section">
                <h2 className="features-title">Powerful Features for Better Investing</h2>

                <div className="features-grid">
                    {featureCards.map((card, index) => (
                        <TiltedCard
                            key={index}
                            imageSrc="https://www.colorhexa.com/192231.png"
                            altText={card.title}
                            captionText={card.title}
                            containerHeight="280px"
                            containerWidth="100%"
                            imageHeight="280px"
                            imageWidth="100%"
                            rotateAmplitude={6}
                            scaleOnHover={1.03}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <div className="card-content">
                                    <div className="card-icon" style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        marginTop: "25px"
                                    }}>{card.icon}</div>
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-description">{card.description}</p>
                                </div>
                            }
                        />
                    ))}

                </div>
            </div>

            <div className="cta-section">
                <h2>Ready to transform your investment strategy?</h2>
                <button className="btn btn-primary btn-large">Start Trading Smarter Today</button>
            </div>
            <Footer />
        </div>

    );
}

export default LandingPage;