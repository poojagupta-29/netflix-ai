import React from 'react';

export const Buttons = ({
    type = "button",
    onClick = () => { },
    disabled = false,
    width = 'w-full',
    spacing = 'min-h-[48px] mb-4',
    bgColor = 'bg-red-600 hover:bg-red-700',
    textStyle = 'text-white font-semibold rounded',
    transition = 'transition',
    btnText = 'Sign In',
    btnArrow = false
}) => {

    const baseStyles = `${width} ${spacing} ${bgColor} ${textStyle} ${transition} cursor-pointer`;
    const disabledStyles = "bg-red-600 bg-opacity-50 cursor-not-allowed";

    return (
        <button
            type={type}
            className={`${disabled ? disabledStyles : baseStyles}`}
            onClick={onClick}
            disabled={disabled}
        >
            {btnText}

            {btnArrow && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-2 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            )}
        </button>
    );
};
