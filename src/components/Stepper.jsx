const steps = [
  {
    id: 1,
    title: "Upload Image",
    description: "Drag and drop your image or click to browse your files.",
  },
  {
    id: 2,
    title: "Choose Action",
    description: "Select Generate Color Palette or Extract Text.",
  },
  {
    id: 3,
    title: "Get Results",
    description: "View and copy your color palette or extracted content.",
  },
];

const VerticalStepper = ({ activeStep, onStepClick }) => {
  return (
    <div className="flex flex-col space-y-8">
      {steps.map((step, index) => {
        const isCompletedOrCurrent = step.id <= activeStep;
        return (
          <button
            key={step.id}
            onClick={() => isCompletedOrCurrent && onStepClick(step.id)}
            className={`flex items-start text-left focus:outline-none w-full 
              ${isCompletedOrCurrent ? "hover:bg-gray-800 cursor-pointer" : "cursor-not-allowed opacity-50"}
              p-2 rounded-lg transition`}
            disabled={!isCompletedOrCurrent}
          >
            {/* Circle Indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2
                  ${
                    activeStep === step.id
                      ? "bg-blue-500 border-blue-300 text-white"
                      : "border-gray-300 text-gray-200"
                  }`}
              >
                {step.id}
              </div>

              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="h-full w-px bg-gray-300"></div>
              )}
            </div>

            {/* Content */}
            <div className="ml-4">
              <h3
                className={`font-medium text-sm ${
                  activeStep === step.id
                    ? "text-blue-600"
                    : "text-gray-100"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default VerticalStepper;
