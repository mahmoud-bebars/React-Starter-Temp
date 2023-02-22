import React from 'react'
import { BiGitRepoForked } from 'react-icons/bi'

const SimpleCard = ({ data }) => {
  return (
    <>
      <div className='container bg-white w-auto h-auto m-5 p-2 rounded-xl shadow-lg shadow-blue-200'>
        <div className='flex items-center'>
          <img
            src={data.avatar_url}
            className='w-32 rounded-full mx-2  shadow-lg'
            alt='Avatar'
          />
          <div>
            <div className='flex items-center'>
              <p className='mb-1 text-xl font-medium leading-tight text-gray-900'>
                {data.name}
              </p>
              <div className='flex items-center text-neutral-500 text-sm'>
                <p className='mx-1'>{data.public_repos}</p> <BiGitRepoForked />
              </div>
            </div>
            <p className='mb-1 text-neutral-500 text-sm'>{data.location}</p>
            <p className='mb-1 text-neutral-500 text-xs'>{data.bio}</p>
            <a href='https://reactjs.org' className='mb-1 text-btn'>
              My Blog <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleCard
