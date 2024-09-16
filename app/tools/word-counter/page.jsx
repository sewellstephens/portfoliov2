'use client';
import { useState } from "react";

export default function WordCounter() {

    const [wordCount, setWordCount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let text = e.target.text.value;

        if (!text) {
            alert('Please enter text.');
            return;
        }

        let words = text.split(' ');
        let wordCount = words.length;
        setWordCount(wordCount);


    }

  return (
    <div className="m-auto max-w-4xl">
      <div className='flex gap-4'>
       
      </div>
      <div className='mt-4'>
        <h1 className="text-xl font-bold mt-12">Word counter</h1>
        <p className="mt-4">Count words in text</p>
        <div className="mt-4">
          <form className="mt-4 w-[50%]" onSubmit={handleSubmit}>

            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Text</label>

            <textarea id="text" name="text" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            
            <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Calculate
            </button>
          </form>
        </div>

        <div className="mt-4">  
            <p className="mt-4">Word count: {wordCount}</p>
        </div>

        <div className="mt-10 mb-10 flow-root">
          <p className="text-sm float-left opacity-70 text-gray-700">&copy; 2024 Sewell Stephens.</p>
          <div className="text-sm float-right opacity-70 flex text-gray-700">Follow me on <a href="https://x.com/sewell_stephens" className="ml-4"><img src="/x.svg" className="w-5 h-5"></img></a> <a href="https://github.com/sewellstephens" className="ml-4"><img src="/github.svg" className="w-5 h-5"></img></a></div>
        </div>
      </div>
    </div>
)
}