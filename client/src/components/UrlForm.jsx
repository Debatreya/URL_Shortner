import React from "react";

export default function UrlForm(){
    
    return (
        <div>
            <h1 className="text-4xl text-green-500 font-bold my-4">
                Url Form
            </h1>
            <form className="flex flex-col sm:w-3/4 mx-auto gap-8">
                <div className="flex items-center flex-wrap gap-4">
                    <label htmlFor="url" className="text-2xl font-bold basis-[425px] sm:basis-auto">Enter Url</label>
                    <input type="text" id="url" name="url" className="p-2 border-2 border-gray-300 grow rounded-md" />
                    <button type="submit" className="bg-green-500 text-white font-bold p-2 rounded-md min-w-[200px]">Shorten</button>
                </div>
                <div className="flex items-center flex-wrap gap-4">
                    <label htmlFor="shortUrl" className="text-2xl font-bold">Shortened Url</label>
                    <input type="text" id="shortUrl" name="shortUrl" className="p-2 border-2 border-gray-300 grow rounded-md" />
                    <button type="submit" className="bg-blue-500 text-white font-bold p-2 rounded-md min-w-[200px]">Copy</button>
                </div>
            </form>
        </div>
    )
}