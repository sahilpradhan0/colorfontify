import { Snippet } from "@heroui/react"
import { useEffect, useState } from "react"
import TestSnippet from "./TestSnippet";
import ColorSnippet from "./ColorSnippet";
const ColorPalette = ({ dominantColor, isHovered, setIsHovered, colorPalettes }) => {
    useEffect(() => {
        setIsHovered(false);
    },[])
    const [hoveredPaletteIndex, setHoveredPaletteIndex] = useState(null);
    return (
        <div className="grid xl:grid-cols-2 mt-10 rounded-2xl shadow-md shadow-white bg-slate-800 p-4 xs:w-2/3 relative w-full">
            {dominantColor &&(
                <div className="flex flex-col gap-y-10 flex-1 ">
                    <h1 className="font-bold text-xl md:text-2xl mt-4 text-center">Dominant Color</h1>
                    <div className="flex relative mb-10">
                        {isHovered && (
                            <ColorSnippet text={dominantColor} bgColor={dominantColor} />
                        )}
                        <div
                            style={{
                                backgroundColor: dominantColor,
                            }}
                            className="flex list-none rounded-full m-5 h-20 w-20 md:h-24 md:w-24 mx-auto"
                            onClick={() => setIsHovered(prev => !prev)}
                        ></div>
                    </div>
                </div>
            )}
            {colorPalettes.length > 0 && (
                <div className="flex flex-col items-center justify-between gap-y-10 ">
                    <h1 className="font-bold text-xl md:text-2xl mt-4">Color Palette</h1>
                    <div className="grid grid-cols-2 2xl:grid-cols-3 auto-rows-[150px] gap-10">
                        {colorPalettes.map((color, index) => {
                            return (
                                <div key={index} className="relative  w-full">
                                    {hoveredPaletteIndex === index && (
                                        <ColorSnippet text={`rgb(${color})`} bgColor={`rgb(${color})`} />
                                    )}
                                    <li
                                        style={{
                                            backgroundColor: `rgb(${color})`,
                                        }}
                                        className="flex list-none rounded-full m-5 h-18 w-18 md:h-24 md:w-24"
                                        onClick={() => setHoveredPaletteIndex(hoveredPaletteIndex === index ? null : index)}
                                    ></li>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ColorPalette