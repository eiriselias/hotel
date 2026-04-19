interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

export const Button = ({children, className="", ...props}:PropsButton) => {
  return (
    <button
        className={`px-8 py-2 rounded-r-full hover:scale-102 hover:opacity-100 font-bold cursor-pointer transition duration-300 ease-in-out
            ${className}`}
        {...props}
    >
        {children}
    </button>
  )
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: Props) => {
  return (
    <input className={`bg-white px-4 py-2 rounded-tl-2xl rounded-br-2xl w-full hover:scale-102 ${className}`} 
    {...props}/>
  )
}