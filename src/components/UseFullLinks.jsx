import React from 'react'
import LinkButton from './LinkButton'
const links = [
  {
    id: 1,
    title: 'Tailwind-Material UI',
    url: 'https://www.material-tailwind.com',
  },
  { id: 2, title: 'Creative Tims', url: 'https://www.creative-tim.com/' },
  { id: 3, title: 'Tailwind UI', url: 'https://tailwindui.com' },
  {
    id: 4,
    title: 'React Router',
    url: 'https://reactrouter.com/en/main/route/should-revalidate',
  },
  {
    id: 5,
    title: 'React Icons',
    url: 'https://react-icons.github.io/react-icons',
  },
]
const UseFullLinks = () => {
  return (
    <>
      <h1 className='m-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
        Some Useful Liks
      </h1>
      <div className='text-center'>
        <div className='grid gap-y-4'>
          {links.map((link) => {
            return (
              <LinkButton key={link.url} title={link.title} url={link.url} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default UseFullLinks
