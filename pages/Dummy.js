import React from 'react'

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {
          `
            .duumy{
                background : yellow;
            }
            `
        }

      </style>
      <div className='duumy'>Dummy</div>


    </>
  )
}

export default Dummy