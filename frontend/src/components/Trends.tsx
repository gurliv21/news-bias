import React, { useState } from 'react'
import { useEffect } from 'react'
import { trendingService } from '../services/trendingService'
function Trends() {
  const [trends,setTrends] = useState<String[]>([])
  const fallbackTrends = [
  "Taylor Swift",
  "Stock Market",
  "Bitcoin Price",
  "IPL 2026",
  "Sensex Today",
  "AI Regulation",
  "NASA Launch",
  "Israel Iran",
  "Gold Rate",
  "World Cup",
  "star wars",
  "winter month"
];

  useEffect(()=>{
    const getTrends =async()=>{
      try{
        const response = await trendingService()
        if(response?.trends?.length){
           setTrends(response.trends)
          
        }else{
          setTrends(fallbackTrends)
        }

        
      }catch(error){
        console.log("error fetching trends")
        setTrends(fallbackTrends) 
      }
    }
    getTrends()

  },[])

  return (
    <div className='flex flex-nonwrap gap-6 px-4 overflow-x-auto' >
      {trends.map((trend,index)=>(
        <div key={index} className='border-white rounded-2xl border-[1px] px-2 flex-nowrap overflow-x-auto text-sm'><p>{trend}</p></div>
      ))}
    </div>
  )
}

export default Trends