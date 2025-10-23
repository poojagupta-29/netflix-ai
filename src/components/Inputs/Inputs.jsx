

export const Inputs = ({
    type = 'text',
    placeholder = 'Email or mobile number',
    inputStyle = "bg-neutral-800",
    name = 'username',
    value = {},
    onChange = () => { }
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`${inputStyle} w-full h-full px-4 py-3 rounded text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-600`}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}
