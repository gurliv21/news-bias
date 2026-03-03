import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { newsService } from './services/newsService';
interface LayoutProp {
  seturl: (value: string) => void;
  setResponse: (value: boolean) => void;
}

function Layout() {
  const [input,setInput] = useState("")
  const navigate = useNavigate()

  const navigateToArticle =()=>{
    getNews()
  }

  const getNews =async()=>{
    try{
      console.log(input)
      const response = await newsService(input)
      if(response){
        navigate("/article",{
          state:{
            article:response
          }
        })
      }
    }catch(error){
      console.log("error loading article",error)

    }
    
  }



  return (
    <div className='mt-28'>
        <h1 className='text-center text-3xl'>News Bias Analyzer</h1>
        <p className='text-center mt-4 text-white/60'> Paste any news article and see its political bias,
sentiment, and framing analysis powered by AI.
</p>
<div className='flex justify-center mt-12 gap-6'>
    <input 
    type='text'
    placeholder=' Enter News Article Here '
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className='bg-transparent border rounded-md w-[520px] h-[50px]'/>
    <button className='bg-orange-300 p-2 rounded-lg text-gray-900' onClick={()=>navigateToArticle()} >Search</button>

</div>

    </div>
  )
}

export default Layout