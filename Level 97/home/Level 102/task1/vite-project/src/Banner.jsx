import React from "react";


export default function FreeTrialBanner() {
    return (
        <div className="banner">
            {/* Left Section */}
            <div className="banner-left">
                <h1 className="banner-title">
                    Join free <br /> for 7 days
                </h1>

                <a href="#" className="appstore-btn">
                    <Apple size={20} className="apple-icon" />
                    Get on the App Store
                </a>
            </div>

            {/* Right Section */}
            <div className="banner-right">
                <div className="phone-card">
                    <p className="date">Today, 14 January</p>
                    <h2 className="kcal">1,297 kcal</h2>
                    <p className="remaining">Remaining</p>

                    <div className="stats">
                        <div className="card intake">
                            <p className="label">Intake</p>
                            <p className="value">928 kcal</p>
                            <p className="sub">46.9 fatg</p>
                        </div>
                        <div className="card burned">
                            <p className="label">Burned</p>
                            <p className="value">1,298 kcal</p>
                            <button className="watch-btn">Watch →</button>
                        </div>
                    </div>
                </div>

                <div className="bg-card">
                    <img
                        src="/fish-illustration.png"
                        alt="illustration"
                        className="bg-image"
                    />
                </div>
            </div>
        </div>
    );
}
