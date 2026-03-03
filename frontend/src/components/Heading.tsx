import  { useEffect, useState } from 'react';
import Trends from './Trends';

function Heading() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      month: 'short',
      weekday: 'long',
      day:'numeric'
    });
    setDate(formattedDate);
  }, []);

  return (
    <div className="width">
      <div className="bg-orange-200 text-center p-2 py-3">
        <h3 className="font-semibold text-black text-lg">
          See every side of every news story
        </h3>
      </div>

      <div className="border-y-[1px] py-4 px-6 flex justify-between">
        <h1 className="font-bold text-xl">Spott News</h1>
        <div className="">{date}</div>
      </div>

      <div className="border-y-[1px] py-4">
        <Trends/>
      </div>
    </div>
  );
}

export default Heading;
