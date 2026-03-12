import  { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { similarArticles } from './services/newsService'
import type { NewsSimilar } from './services/newsService'
function NewsArticle() {
  const [relatedArticle,setRelatedArticle] = useState<NewsSimilar[]>([])

  const location = useLocation()
  const article =location.state?.article 
    
  if(!article){
    return <h1>no article found</h1>
  }

  useEffect(()=>{
    const similarArticle=async()=>{
      try{
        console.log(article.title)
        const response = await similarArticles("CHOCOLATE CHIP CAKE WITH GANACHE DRIP")
        console.log(response)
        setRelatedArticle(response)

      }catch(error){
        console.log("error fetching similar news article",error)
      }
    }
    similarArticle()
  },[article])


  return (
    <div className='grid grid-cols-[60%_40%]'>
      <div className='p-20 border-r '>
              <h1 className=' mb-6 text-2xl uppercase'>{article.title}</h1>
      <div>
        {article.content.map((para:string,index:number)=>(
          <p className='mb-4' key={index}>{para}</p>
        ))}
      </div>

      </div>
      <div className='p-20 '>
        <h1 className=' mb-6 text-2xl'>Similar Articles</h1>

        <div>
          {relatedArticle.map((v,index)=>(
            <div className='mb-6' key={index}>

            <p className='text-white/90'>{v.title}</p>
            <div className='flex gap-8'><p className='text-yellow-500'>{v.source}</p>
            <a  href={v.link} className='text-blue-400'>link</a>
            </div>
            </div>


          ))}
        </div>

      </div>

    </div>
  )
}

export default NewsArticle