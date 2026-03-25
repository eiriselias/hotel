import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-blue-500 flex flex-col items-center text-white font-bold py-4'>
        <div className='flex gap-8 mb-2'>
            <Link href="https://www.linkedin.com/in/eiriselias" target="_blank">
                <i className="fa-brands fa-linkedin text-4xl hover:opacity-80"></i>
            </Link>
            <Link href="https://www.github.com/eiriselias" target="_blank">
                <i className="fa-brands fa-github text-4xl hover:opacity-80"></i>
            </Link>
            <Link href="https://www.facebook.com/eiriselias" target="_blank">
                <i className="fa-brands fa-facebook text-4xl hover:opacity-80"></i>
            </Link>
        </div>
        <div>
            <p>© Eiris Salazar Full Stack Developer - 2026</p>
        </div>
    </div>
  )
}

export default Footer