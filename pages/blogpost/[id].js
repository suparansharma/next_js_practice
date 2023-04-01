import React from 'react'
import { useRouter } from 'next/router'
import Dummy from '../Dummy';

const Blogpost = () => {
const router = useRouter();
  const { id } = router.query;
  return (
    <>
    <style>
        {
            `
                .mySpan{
                    color : red;
                }
            `
        }
    </style>
    <div>{id}</div>
    <Dummy/>
    <span className='mySpan duumy'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur officiis quis nesciunt. Perferendis animi voluptatem at, modi asperiores aspernatur praesentium, blanditiis illo officiis ab dicta incidunt adipisci dolorum eum.</span>
    </>
  )
}

export default Blogpost