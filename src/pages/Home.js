import React from 'react'
import LinkButton from '../components/LinkButton'
import SimpleCard from '../components/SimpleCard'
import react from '../logos/react.svg'
import tailwind from '../logos/tailwind.svg'
import UseFullLinks from '../components/UseFullLinks'
const Home = ({ data }) => {
  return (
    <>
      <main className='grid min-h-full place-items-center bg-white py-10 px-6 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <h1 className=' text-3xl font-bold tracking-tight'>👋</h1>
          <p className='text-base font-semibold text-blue-600'>Hello Friend</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 '>
            Welcome
          </h1>
          <div className='mt-4 flex items-center justify-center '>
            <img src={react} alt='react-logo' className='w-24' />
            <img src={tailwind} alt='tailwind-logo' className='w-16' />
          </div>
          <h2 className='mt-4 text-2xl font-semibold tracking-tight text-gray-900 '>
            React Tailwind Starter
          </h2>

          <h3 className='mt-4 text-lg font-thin tracking-tight text-gray-900 '>
            Let's Start Creating Our App
          </h3>

          <p className='m-2 text-lg font-thintracking-tight text-gray-900 '>
            &darr;
          </p>

          <p className='mt-6 text-base leading-7 text-gray-600'>
            - Create Pages in <code className='text-blue-800'>`./pages`</code>.{' '}
            <br /> - Components in the{' '}
            <code className='text-blue-800'>`./components`</code>. <br />- You
            can Also Put your Hooks here{' '}
            <code className='text-blue-800'>`./hooks`</code>.
            <br />- Common stlye collaction in{' '}
            <code className='text-blue-800'>`index.css`</code>.
            <br /> For Better Expreince Launch & Debug Your App In Chrome
            Browser
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='https://tailwindcss.com'
              // this class is globalized to be used all over the app from index.css by appling classes one time & use it in many places for time saving.
              className='btn'
            >
              Tailwind Docs
            </a>
            <LinkButton title='React Docs' url='https://reactjs.org' />
          </div>
          <p className='mt-6 text-sm text-gray-600'>
            For Better Expreince Launch & Debug Your App In Chrome Browser
          </p>

          <div className=' border-t w-96 m-5 border-gray-400' />

          <h1 className='mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
            Coustom Hook Example
          </h1>
          <h3 className='mt-4 text-lg font-thin tracking-tight text-gray-900 '>
            This Example is Done With Coutom Hook
          </h3>

          <p className='m-2 text-lg font-thintracking-tight text-gray-900 '>
            &darr;
          </p>
        </div>
        <SimpleCard data={data} />

        <div className='text-center'>
          <p className=' mt-6 text-base leading-7 text-gray-600 items-center'>
            - Find The Reuseable Component In
            <code className='text-blue-800'>`./components/SimpleCard.js`</code>
            <br />- Edit The Data coming from Api In
            <code className='text-blue-800'>`./hooks/GitHubUser.js`</code>
          </p>
        </div>
        <div className=' border-t w-96 m-5 border-gray-400' />
        <UseFullLinks />
      </main>
    </>
  )
}

export default Home
