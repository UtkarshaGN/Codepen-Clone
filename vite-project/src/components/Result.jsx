import React from 'react'

function Result({srcCode}) {
  return (
    <div>
      
        <div className='bg-[#282c34] rounded-lg p-4 mt-4 shadow'>
            <h2 className='text-lg text-white font-semibold mb-4'>Result</h2>
            <iframe
                    className="w-full h-60 border border-gray-700 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
        </div>
      </div>
    
  )
}

export default Result
