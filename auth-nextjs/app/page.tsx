"use client"

import { postReq } from '@/public/common'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
 
export default function Page() {
  const router=useRouter()
  const [formData,setFormData]=useState({email:"",password:""})

const emailChange=(e:any)=>{
setFormData((prev)=>{
  return {...prev,email:e.target.value}
})
}

const passwordChange=(e:any)=>{
  setFormData((prev)=>{
    return {...prev,password:e.target.value}
  })
  }

  
  async function onSubmit() {
    if(formData.email && formData.password){
      postReq("http://localhost:3000/auth",formData,"POST").then(e=>{
        if(e.message){
       return alert("Email Or Password Wrong")
        }
        router.push("/home")
      })
    }
  }
 
  return (
    <main className='h-[100vh] flex justify-center items-center' >
      <div className='flex flex-col'>
      <label htmlFor="email">Email</label>
      <input type="text" name="email"  onChange={e=>emailChange(e)} className='border border-[#000000] rounded-[4px]'/>
      <label htmlFor="password" className='mt-2'>Password</label>
      <input type="password" name="password"  onChange={e=>passwordChange(e)} className='border border-[#000000] rounded-[4px] '/>
      <button  className='p-1 bg-blue-600 mt-3 rounded-[4px] text-white' onClick={onSubmit}>Submit</button>
      <p className='text-[14px] font-bold text-blue-600 text-center mt-4 cursor-pointer'onClick={()=>router.push("/register")}>Create Account ➡</p>
      </div>
    </main>
  )
}