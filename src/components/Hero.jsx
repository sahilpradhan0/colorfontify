import DragAndDrop from "./DragAndDrop"

const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center gap-y-5 mt-10 text-white px-4"  id='upload'>
            <h1 className="font-bold text-2xl xl:text-4xl  text-center" >Extract Colors & Text from Any Image Instantly</h1>
            <p className="text-gray-500  text-center font-medium">Extract what matters — color inspiration and text content in seconds — <span className="font-medium italic text-gray-300"> No login or signup needed.</span></p>
            <DragAndDrop />
        </section>
    )
}

export default Hero