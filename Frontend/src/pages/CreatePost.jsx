import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate()
    const showNagivate = useNavigate()

    const showData = ()=>{
        showNagivate("/posts")
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

     const formData = new FormData(e.target)

    axios.post("https://notes-if92.onrender.com/create-post" , formData)
    .then((res)=>{

        navigate("/posts")
    })
    .catch((err)=>{
        console.log(err)
        alert("Error Creating Post") 
    })
}

    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-950 p-4'>
    {/* Outer Gradient Border Box */}
    <div className='p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-600 shadow-xl shadow-violet-500/20'>
        
        {/* Inner Content Box */}
        <div className='bg-slate-900/90 backdrop-blur-sm p-8 rounded-xl text-white w-full max-w-[320px]'>
            <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 text-center mb-6'>
                Create Post
            </h1>
            
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                {/* File Input Style */}
                <div className="flex flex-col gap-1">
                    <label className="text-[10px] uppercase tracking-wider text-gray-400">Upload Image</label>
                    <input 
                        type="file" 
                        name='image' 
                        accept='image/*' 
                        className='text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-violet-600 file:text-white hover:file:bg-violet-700 cursor-pointer'
                    />
                </div>

                {/* Text Input Style */}
                <input 
                    type="text" 
                    name='caption' 
                    placeholder='Enter Caption...' 
                    className='bg-slate-800 border-b-2 border-gray-600 focus:border-violet-500 outline-none p-2 w-full transition-colors duration-300'
                    required 
                />
                
                {/* Submit Button */}
                <button 
                    type='submit' 
                    className='bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 py-2 rounded-lg font-semibold shadow-lg shadow-violet-900/20 active:scale-[0.98] transition-all'
                >
                    Submit
                </button>
            </form>

            <button 
                onClick={showData} 
                className='mt-4 w-full text-xs text-gray-500 hover:text-white transition-colors underline decoration-dotted underline-offset-4'
            >
                Show Data
            </button>
        </div>
    </div>
</div>
    )
}

export default CreatePost
