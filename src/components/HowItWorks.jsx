import React, { useState } from "react";
import VerticalStepper from "./Stepper";

function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <section className="w-[90%] md:w-2/4 mx-auto p-4 md:p-10 bg-slate-900 rounded-2xl shadow-md shadow-blue-400 mt-6 flex flex-col justify-center items-center" id="howItWorks">
            <h2 className="text-xl md:text-3xl text-center mb-5 font-semibold text-white">How It Works</h2>

            {/* The stepper */}
            <VerticalStepper
                activeStep={activeStep}
                onStepClick={(id) => {
                    // Allow click ONLY on completed/current steps
                    if (id <= activeStep ) {
                        setActiveStep(id);
                    }
                }}
            />

            {/* Upload simulation */}
            <div className="mt-10 flex gap-4 justify-between w-full relative mb-10">
                {activeStep > 1 && (
                    <button
                        onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                        className="px-4 py-2 rounded bg-blue-500 text-white absolute left-0"
                    >
                        Back
                    </button>
                )}

                {activeStep < 3 && (
                    <button
                        onClick={() => setActiveStep((prev) => Math.min(prev + 1, 3))}
                        className="px-4 py-2 rounded bg-green-500 text-white absolute right-0"
                    >
                        Next
                    </button>
                )}
            </div>
        </section>
    );
}

export default HowItWorksSection;
