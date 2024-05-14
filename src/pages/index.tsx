import React, { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import { useDrag } from '@use-gesture/react';
import ProgressChart from '../components/ProgressChart';

const initialGoals = [
  { id: 1, text: "Workout for 20 mins", completed: true, bgColor: "#7DA7CE" },
  { id: 2, text: "Read book for 15 mins", completed: true, bgColor: "#0E77D9" },
  { id: 3, text: "30 mins walk", completed: true, bgColor: "#D15439" },
  { id: 4, text: "Sleep at 11 sharp", completed: true, bgColor: "#D9A00E" },
  { id: 5, text: "Drink 3L water", completed: false, bgColor: "#6AD139" }
];

export default function Home() {
  const [goals, setGoals] = useState(initialGoals);
  const [progressData, setProgressData] = useState([
    { date: new Date(2023, 4, 28), percentage: 92 },
    { date: new Date(2023, 4, 30), percentage: 100 },
    { date: new Date(2023, 5, 2), percentage: 98 },
    { date: new Date(2023, 5, 5), percentage: 90 },
    { date: new Date(2023, 5, 11), percentage: 84 },
    { date: new Date(2023, 5, 15), percentage: 82 },
    { date: new Date(2023, 5, 22), percentage: 80 }
  ]);

  const markAllAsCompleted = () => {
    const allCompleted = goals.map(goal => ({ ...goal, completed: true }));
    setGoals(allCompleted);
  };

  const toggleGoal = (id) => {
    const updatedGoals = goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
  };

  const updateProgressData = () => {
    const newRecord = {
      date: new Date(), 
      percentage: (goals.filter(g => g.completed).length / goals.length) * 100
    };
    setProgressData([...progressData, newRecord]);
  };

  const completedCount = goals.filter(goal => goal.completed).length;
  const progress = Math.round((completedCount / goals.length) * 100);

  const dragRef = useRef();
  const [dragging, setDragging] = useState(false);

  const bind = useDrag(({ down, movement: [mx], memo = dragRef.current.offsetLeft }) => {
    if (down) {
      setDragging(true);
      const newLeft = Math.min(Math.max(memo + mx, 0), dragRef.current.parentElement.offsetWidth - dragRef.current.offsetWidth);
      dragRef.current.style.left = `${newLeft}px`;
      if (newLeft >= dragRef.current.parentElement.offsetWidth - dragRef.current.offsetWidth) {
        markAllAsCompleted();
      }
    } else {
      setDragging(false);
      dragRef.current.style.left = '0px'; 
    }
    return memo;
  }, { axis: 'x' });

  return (
     <div className=" mx-auto grid bg-[#212121] ">
     <div className="container grid bg-[#212121] mx-auto p-4">
      <div className="container place-content-space-between bg-gradient-to-r from-[#7DA7CE] to-[#0E77D9] w-full h-auto mb-4 rounded-xl flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="https://s3-alpha-sig.figma.com/img/d485/57f7/d96dd5e1600b20f541cfe92bfa3ed5f7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=niiDYXPpbccj98CqrL4ahcAolTQNreZ0Xa4FhnOMyuYYAOy9IVjzdpBNU7Y~o1I7hZDaUsNnibefX2MHTMqnO5ABTluPEaQhptd07x9AU1nsCwTNSEjwdWuT6tQGitS7NkRSgEAXvuSKYWeuPza3HwqHknu-Z18M0fgPaQ6OHsiydwkCiOqakosEI59qvJm0dgFi98xHSGBKCahGQyQcOOAy5J~VN0LUeegUfzaeCa7EJaVL16rj5amCrnG4P2bMjC0O434XFPKdcLXhzIxtaxzl46JeZLCSvEp3Bjo65wpx2eq2f9Y-hmFEdxWsRH-VZdpnZAZKcsCyM9uoGbyEPw__" alt="Today's Goal Icon" className="w-12 h-12"/>
          <div className="ml-4">
            <p>Your Daily Goal Almost Done</p>
            <p className="text-white text-[60%] mb-1 font-thin">{completedCount} out of {goals.length} Completed</p>
           <div className="relative w-full">
  <div className="w-full bg-gray-400 h-0.5 rounded">
    <div className="bg-white h-full rounded" style={{ width: `${progress}%` }}></div>
  </div>
  <div className="absolute right-0 text-white text-[50%]" style={{ bottom: '-1rem', transform: 'translateX(10%)' }}>
    {progress}%
  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-content-between items-center p-2">
        <p className='text-white mr-2'>Today's Goal</p>
        <img src="https://s3-alpha-sig.figma.com/img/210a/8de5/6f295743678d95c92f172e86e2102679?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqaScr0cZULLFRy0Rhb10SJBfTyMah78dAgRkLCntQYtTPPbaXppBnjp-6pO2pcozux3hIpAs0Sz1kLhPS-7L97KnHDk0RJDph-OVM-zYJwZmBPyz5Pjb6~RVNjvuQowImy2T-T4GKCWTGaMdZcX06vOysrW6OwWEALnDO7P5NdT~ffeNF6l2Pk9wE-DlNznoDnrovqnTcWp8AFDg8NN--lbW2srl4WxwOjL2I2nGNSp03VAcRJkQuj0uoFQAY4T2qItw3wHiv2XxXT9nrxJynbWuVpocKQs06YSVYliERKCjPnBM5bia6Lh3ACdLj4rVaN8bAmlW7nIWLlKGnSmTQ__" alt="Today's Goal Icon" className="w-9 h-full"/>
      </div>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}
              className={`flex items-center justify-between p-4 my-2 cursor-pointer bg-[#282828] rounded-lg`}
              onClick={() => toggleGoal(goal.id)}>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-[#383838] rounded-md mr-4">
                {goal.id === 1 && (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3.58305C8.001 3.58305 7.2 4.26903 7.2 5.12457C7.2 5.98012 8.001 6.6661 9 6.6661C9.999 6.6661 10.8 5.98012 10.8 5.12457C10.8 4.26903 9.999 3.58305 9 3.58305ZM18 0.5V4.35381H16.2V2.81229H1.8V4.35381H0V0.5H1.8V2.04152H16.2V0.5H18ZM11.7 8.40802V17.4568H9.9V13.603H8.1V17.4568H6.3V8.40802C4.437 7.56789 3.15 5.89533 3.15 3.96843V3.58305H4.95V3.96843C4.95 5.89533 6.75 7.43686 9 7.43686C11.25 7.43686 13.05 5.89533 13.05 3.96843V3.58305H14.85V3.96843C14.85 5.89533 13.563 7.56789 11.7 8.40802Z" fill="#9E4CB8"/>
                  </svg>
                )}
                {goal.id === 2 && (
                  <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4525 8.70023C13.2084 8.40023 12.9111 8.14022 12.6351 7.88021C11.9239 7.28019 11.1171 6.85018 10.4377 6.22016C8.85591 4.76012 8.50559 2.35005 9.51409 0.5C8.50559 0.730007 7.62449 1.25002 6.87077 1.82004C4.1213 3.9001 3.03849 7.5702 4.33361 10.7203C4.37608 10.8203 4.41854 10.9203 4.41854 11.0503C4.41854 11.2703 4.2593 11.4703 4.04699 11.5503C3.80283 11.6503 3.54805 11.5903 3.34635 11.4303C3.28266 11.3803 3.24019 11.3303 3.19773 11.2603C1.99815 9.83027 1.80707 7.78021 2.61386 6.14016C0.841038 7.5002 -0.124993 9.80027 0.0130114 11.9703C0.0767058 12.4703 0.1404 12.9704 0.320868 13.4704C0.469488 14.0704 0.756112 14.6704 1.07458 15.2004C2.22108 16.9305 4.20622 18.1705 6.33999 18.4205C8.61175 18.6905 11.0428 18.3005 12.7837 16.8205C14.7264 15.1604 15.4058 12.5003 14.4079 10.2203L14.2699 9.96027C14.047 9.50026 13.4525 8.70023 13.4525 8.70023ZM10.098 15.0004C9.80071 15.2404 9.31239 15.5004 8.93022 15.6004C7.74126 16.0004 6.5523 15.4404 5.85166 14.7804C7.11493 14.5004 7.86865 13.6204 8.09158 12.7303C8.27205 11.9303 7.93234 11.2703 7.79434 10.5003C7.66695 9.76026 7.68818 9.13025 7.97481 8.44023C8.17651 8.82024 8.38882 9.20025 8.6436 9.50026C9.46101 10.5003 10.7455 10.9403 11.0215 12.3003C11.064 12.4403 11.0852 12.5803 11.0852 12.7303C11.1171 13.5504 10.7349 14.4504 10.098 15.0004Z" fill="#DE6C53"/>
                  </svg>
                )}
                {goal.id === 3 && (
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.08526 8.75584C6.50876 9.86417 6.46371 11.0175 5.19319 11.4771C2.58006 12.4412 1.99436 9.90922 1.95832 9.78307L6.08526 8.75584ZM1.55283 8.02597L5.44549 7.06182C5.27429 6.11569 5.5356 5.16957 5.5356 4.05223C5.5356 2.53843 4.33717 -0.426107 2.42688 0.0514625C0.246271 0.592107 -0.0691058 3.016 0.0119913 4.1874C0.120121 5.35879 1.48976 7.86378 1.55283 8.02597ZM12.4919 16.0816C12.4649 16.2167 11.8702 18.7397 9.25705 17.7846C7.99554 17.3161 7.94148 16.1627 8.36498 15.0544L12.4919 16.0816ZM14.4292 10.4949C14.5193 9.32352 14.213 6.89062 12.0234 6.34997C10.1221 5.85438 8.92365 8.83694 8.92365 10.3598C8.92365 11.4681 9.17595 12.4142 9.02277 13.3603L12.8974 14.3245C12.9695 14.1623 14.3301 11.6573 14.4292 10.4949Z" fill="#81B47D"/>
                  </svg>
                )}
                {goal.id === 4 && (
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.32469 0.80127C5.10888 1.47134 4.99931 2.17106 4.99994 2.87502C4.99994 6.60289 8.02206 9.62502 11.7499 9.62502C12.67 9.62614 13.5805 9.43852 14.4252 9.07377C13.5503 11.7876 11.0044 13.75 7.99994 13.75C4.27206 13.75 1.24994 10.7279 1.24994 7.00002C1.24994 4.22239 2.92731 1.83702 5.32469 0.80127Z" fill="#63A7A7" stroke="#63A7A7" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                )}
                {goal.id === 5 && (
                  <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.18326 0.317854C6.15896 0.124354 5.84126 0.124354 5.81786 0.317854C5.02316 6.71415 0.959656 8.03265 0.959656 12.4787C0.959656 15.2264 3.26726 17.453 6.00056 17.453C8.73296 17.453 11.0406 15.2255 11.0406 12.4787C11.0406 8.03265 6.97796 6.71415 6.18326 0.317854ZM5.41556 7.38916C5.36246 7.58626 5.30486 7.78875 5.24546 7.99935C4.88456 9.28096 4.47506 10.7345 4.47506 12.4148C4.47506 13.3256 3.93686 13.6487 3.43466 13.6487C3.29744 13.6481 3.16168 13.6205 3.03513 13.5674C2.90858 13.5143 2.79373 13.4369 2.69711 13.3394C2.6005 13.242 2.52403 13.1265 2.47207 12.9995C2.4201 12.8725 2.39366 12.7365 2.39426 12.5993C2.39426 10.613 3.35006 9.31516 4.19426 8.17125C4.45976 7.81305 4.70906 7.47375 4.91156 7.13626C5.00426 6.98145 5.25356 6.98865 5.36696 7.14165C5.42005 7.21365 5.43806 7.30546 5.41556 7.38916Z" fill="#5A92CB"/>
                  </svg>
                )}
              </div>
              <span className="text-white">{goal.text}</span>
            </div>
            {goal.completed && (
              <span className="text-white w-8 h-8 flex items-center justify-center rounded-md mr-4" style={{ backgroundColor: goal.bgColor }}>
                &#10003;
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="relative bg-[#D15439] p-4 rounded-full mt-4 cursor-pointer" style={{ height: '3rem' }}>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          Swipe to track all
        </div>
        <button 
          ref={dragRef}
          className="absolute w-10 h-10 rounded-full bg-white text-[#D15439] font-bold text-[50%] flex items-center justify-center"
          style={{ top: '50%', transform: 'translateY(-50%)', left: '3px' }}
          {...bind()}
        >
          Track
        </button>
      </div>
      <div className="h-1/2 w-[100%] bg-[#282828] rounded-lg mb-3 mt-10">
        <div className="w-full h-full ">
          <ProgressChart progressData={progressData} />
        </div>
      </div>
      </div>
       <div className='w-full'>
        <Navigation />
      </div>
    </div>
  );
}
