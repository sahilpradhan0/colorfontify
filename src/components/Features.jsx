import FeatureCard from './FeatureCard'
const features = [
  {
    icon: "🎨",
    title: "Color Palette",
    description: "Automatically extract dominant colors and color palettes from any image"
  },
  {
    icon: "📝",
    title: "Text Extraction",
    description: "Extract Text in seconds"
  },
  {
    icon: "⚡",
    title: "Fast Processing",
    description: "Get results in seconds "
  },
  {
    icon: "💾",
    title: "Download & Copy",
    description: "Copy your colors or text effortlessly"
  },
  {
    icon: "🔒",
    title: "Secure",
    description: "Your data stays safe and confidential"
  }, {
    icon: "📱",
    title: "Mobile Friendly",
    description: "Works seamlessly on any device"
  },
]
const Features = () => {
  return (
    <div className='px-10 md:px-30 text-white  flex  flex-col gap-10 cursor-pointer' id='features'>
      <h1 className='text-center text-2xl md:text-4xl'>Features</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 '>
        {
          features.map((feature, index) => <FeatureCard key={index} feature={feature} />)
        }
      </div>
    </div>
  )
}

export default Features