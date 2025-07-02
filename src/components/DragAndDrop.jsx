import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// @ts-ignore
import ColorThief from 'colorthief'
import ColorPalette from './ColorPalette';
import ExtractText from './ExtractText';
import { Spinner } from '@heroui/react';
const DropImage = () => {
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [shouldGenerateText, setShouldGenerateText] = useState(false);
    const imgRef = useRef();
    const [colors, setColors] = useState([]);
    const [colorPalettes, setColorPalettes] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        setShouldGenerateText(false);
    }, [image])
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setImageFile(file);
        }
    }, []);
    const handleClear = (e) => {
        e.stopPropagation()
        setImage(null);
        setImageFile(null);
        setColors([]);
        setColorPalettes([]);
    };
    const getColorPalette = (e) => {
        e.stopPropagation();
        const colorThief = new ColorThief();
        if (imgRef.current && imgRef.current.complete) {
            const colorPalette = colorThief.getPalette(imgRef.current, 10);
            const color = colorThief.getColor(imgRef.current);
            setColors(color);
            const formattedPalette = colorPalette.map(p => `${p[0]}, ${p[1]}, ${p[2]}`)
            setColorPalettes(formattedPalette);
        }
    }
    const dominantColor = colors.length === 3 ? `rgb(${colors[0]},${colors[1]},${colors[2]})` : null;
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': []
        },
        multiple: false
    });
    return (
        <div className="w-full md:min-w-xl mx-auto cursor-pointer flex flex-col items-center gap-10 relative">
            <div
                {...getRootProps()}
                className={`border-2 md:min-w-sm h-66 md:min-h-72 border-dashed rounded-xl p-5 cursor-pointer transition-colors relative flex items-center justify-center ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}`}
            >
                <input {...getInputProps()} />
                {image ? (
                    <div className="flex flex-col space-y-4 items-center w-full">
                        <img
                            src={image}
                            ref={imgRef}
                            alt="Uploaded preview"
                            onLoad={getColorPalette}
                            className="max-h-48 w-auto object-cover rounded-xl"
                        />
                        <button
                            onClick={handleClear}
                            className="cursor-pointer border-b-2 absolute bottom-2 text-red-400 text-sm font-semibold hover:text-red-800 hover:font-semibold transition w-2/3 md:w-1/2 mt-2"
                        >
                            Clear Image
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <p className="text-gray-300 mb-2 text-sm md:text-xl">
                            {isDragActive ? 'Drop the image here...' : 'Drag & drop an image here'}
                        </p>
                        <p className="text-md text-gray-400 md:text-xl">or click to upload</p>
                    </div>
                )}
            </div>
            {
                image && (

                    <div className='flex md:gap-x-10 py-4 md:px-6 rounded-4xl bg-slate-900 shadow-lg shadow-gray-600 w-xs xs:w-md md:w-lg justify-evenly text-sm xs:text-md md:text-lg'>
                        <button onClick={() => setShouldGenerateText(false)} className={`${shouldGenerateText ? " " : " bg-white  text-black p-2 xs:py-3 xs:px-5 rounded-3xl transition ease-in"}`}>Generate Color Palette</button>
                        <button onClick={() => setShouldGenerateText(true)} className={`${!shouldGenerateText ? "" : " bg-white text-black p-2 xs:py-3 xs:px-5 rounded-3xl transition ease-in"}`}>Extract Text</button>
                    </div>
                )
            }
            {!shouldGenerateText && image && <ColorPalette dominantColor={dominantColor} isHovered={isHovered} setIsHovered={setIsHovered} colorPalettes={colorPalettes} />}
            {shouldGenerateText && <ExtractText image={imageFile} />}
        </div>
    );
};
export default DropImage;