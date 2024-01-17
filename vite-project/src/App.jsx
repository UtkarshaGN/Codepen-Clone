import React from 'react'
import CodeMirror from "@uiw/react-codemirror";
import Navbar from './components/Navbar'
import Result from './components/Result'
import { useState } from 'react'
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback } from 'react';

function App() {
//*create usestate 
const[html_edit, setHtml_Edit] = useState('');
const[css_edit, setCss_Edit] = useState('');
const[js_edit, setJs_Edit] = useState('');

 //* Html onchange handler 
 const onChangeHtml = useCallback((value) => {
  console.log(value);
  setHtml_Edit(value)
}, []);

//* Css onchange handler 
const onChangeCss = useCallback((value) => {
  console.log(value);
  setCss_Edit(value)
}, []);

//* JavaScript onchange handler 
const onChangeJavaScript = useCallback((value) => {
  console.log(value);
  setJs_Edit(value)
}, []);

const srcCode =`
<html>
<body>${html_edit}</body>
<style>${css_edit}</style>
<script>${js_edit}</script>
</html>
`
  
  return (
    <div>
      <Navbar/>
       <div className='p-2'>
        <div className='grid grid-cols-1  lg:grid-cols-3 gap-2'>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-lg text-white font-semibold mb-2'>HTML</h2>
            
            <CodeMirror
            className='text-xl border border-gray-700'
            value= {html_edit}
            height = '342px'
            theme = 'dark'
            extensions = {[html(true)]}
            onChange={onChangeHtml}

            />

            
          </div>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className=' text-lg text-white font-semibold mb-2'>CSS</h2>
            <CodeMirror className='text-xl border border-gray-700'
            value = {css_edit}
            height ='342px'
            theme= 'dark'
            extensions ={[css(true)]}
            onChange={onChangeCss}
            />
          </div>
          <div className='bg-[#282c34] p-4 rounded-lg shadow'>
            <h2 className='text-white text-lg font-semibold mb-2'>Javascipt </h2>
              <CodeMirror className=' text-xl border border-gray-700'
              value = {js_edit}
              height ='342px'
              theme ='dark'
              extensions= {[javascript(true)]}
              onChange={onChangeJavaScript}
              />
           
            
          </div>
        </div>
         {/* Result  */}
         <Result
         srcCode = {srcCode}
        />
       </div>
      
    </div>
  )
}

export default App
