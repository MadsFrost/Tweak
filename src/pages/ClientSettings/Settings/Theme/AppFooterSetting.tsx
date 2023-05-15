import React from 'react';
import { useAppSelector } from "../../../../hooks";
import { ColorResult, AlphaPicker, SliderPicker } from "react-color";
import { useDispatch } from "react-redux";
import { setBackground, setText } from "../../../../state/client";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const AppFooterSetting = () => {
    const [isOpen, setOpen] = React.useState(false);
    const [isBGOpen, setBGOpen] = React.useState(false);
    const [isTextOpen, setTextOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    const toggleBGOpen = () => {
        setBGOpen(!isBGOpen);
    }

    const toggleTextOpen = () => {
        setTextOpen(!isTextOpen);
    }

    const dispatch = useDispatch();
    const handleOnChangeBackground = (result: ColorResult) => {
        dispatch(setBackground({ color: result, type: 'appfooter'}))
    }

    const handleOnChangeText = (result: ColorResult) => {
        dispatch(setText({ color: result, type: 'appfooter'}))
    }
    const { background, text } = useAppSelector((state) => state.client.options.appFooter.style)
    const defaultWhite : ColorResult = {
        hex: "",
        hsl: { h: 1, l: 1, s: 1},
        rgb: { r: 255, g: 255, b: 255, a: 1 }
    }
    const defaultBlack: ColorResult = {
        hex: "",
        hsl: { h: 1, l: 1, s: 1},
        rgb: { r: 0, g: 0, b: 0, a: 1 }
    }
    return (
        <div className='w-full'>
            <h1 className='text-md font-semibold pb-2 cursor-pointer select-none flex items-center' onClick={toggleOpen}>App Footer {isOpen ? <AiFillCaretUp className='ml-2'/> : <AiFillCaretDown className='ml-2' />}</h1>
            {isOpen && (
                <div className='space-y-4 pl-6'>

                    <h1 className='text-md font-semibold pb-2 flex items-center cursor-pointer' onClick={toggleBGOpen}>Background {isBGOpen ? <AiFillCaretUp className='ml-2'/> : <AiFillCaretDown className='ml-2' />}</h1>
                    {isBGOpen && (
                        <>
                            <button className="bg-gray-800 text-white font-semibold px-3 rounded-md py-1 mr-4"
                            onClick={() => handleOnChangeBackground(defaultBlack)}>Black</button>
                            <button className="bg-white text-black font-semibold px-3 rounded-md py-1 mr-4"
                            onClick={() => handleOnChangeBackground(defaultWhite)}>White</button>
                            <div className='w-full pb-4'>
                                <SliderPicker color={background} onChange={handleOnChangeBackground} />
                                <div className='mt-4 w-full'>
                                    <AlphaPicker className="w-full" color={background} onChange={handleOnChangeBackground} />
                                </div>
                            </div>
                        </>
                    )}

                    <h1 className='text-md font-semibold pb-2 flex items-center cursor-pointer' onClick={toggleTextOpen}>Text {isTextOpen ? <AiFillCaretUp className='ml-2'/> : <AiFillCaretDown className='ml-2' />}</h1>
                    {isTextOpen && (
                    <>
                    <button className="bg-gray-800 text-white font-semibold px-3 rounded-md py-1 mr-4"
                    onClick={() => handleOnChangeText(defaultBlack)}>Black</button>
                    <button className="bg-white text-black font-semibold px-3 rounded-md py-1 mr-4"
                    onClick={() => handleOnChangeText(defaultWhite)}>White</button>
                    <div>
                        <SliderPicker color={text} onChange={handleOnChangeText} />
                        <div className='mt-4 w-full'>
                            <AlphaPicker className="w-full" color={text} onChange={handleOnChangeText} />
                        </div>
                    </div>
                    </>
                    )}

                </div>
            )}
        </div>
    )
}

export default AppFooterSetting;