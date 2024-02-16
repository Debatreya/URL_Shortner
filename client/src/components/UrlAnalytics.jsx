import React, { useEffect, useState } from "react";

export default function UrlAnalytics(){
  const [url, setUrl] = useState(''); 
  const [clicks, setClicks] = useState(0);
  // Change this before Push to production

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://url-shortner-backend-zpn2.onrender.com'
  // const backendUrl = "http://localhost:8000"

  // 
  const getAnalytics = async() => {
    try {
      const res = await fetch(`${backendUrl}/analytics/${url}`);
      const data = await res.json();
      setClicks(data.totalClicks);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1 className="text-4xl text-blue-500 font-bold my-4 font-sans">
        Url Analytics
      </h1>
      <div>
        <label htmlFor="url" className="text-2xl font-bold">Enter Encrypted Url</label>
        <input type="text" id="url" name="url" className="p-2 border-2 border-gray-300 grow rounded-md" value={url} />
        <button className="bg-blue-500 text-white font-bold p-2 rounded-md min-w-[200px]" onClick={getAnalytics}>Get Analytics</button>
        <h2>Number of Clicks <span>{clicks}</span></h2>
      </div>
    </div>
  )
}