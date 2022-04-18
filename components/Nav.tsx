import Link from 'next/link';

export default function Nav() {
  return (
    <div className=''>
      <ul className='h-20 list-none flex justify-center bg-gray-900 text-white'>
        <li className='text-3xl flex items-center'>
          <Link href="/" passHref>
            <a className='uppercase'>
              100 days react next
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}