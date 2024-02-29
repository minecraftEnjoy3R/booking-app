"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect } from 'react'
import GlobalApi from '../_utils/GlobalApi'

function CategorySearch() {

  useEffect(()=>{
    getCategoryList()
  },[])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.data.data);
    })

  }
  return (
    <div className='mb-10 items-center flex flex-col gap-2'>
        <h2 className='font-bold text-4xl
        tracking-white'>Search character</h2>
        <h2 className='text-gray-500 text-xl'>Search your character and explore more</h2>

        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." />
      <Button type="submit">
        <Search className='h-4 w-4 mr-2'/>
        Search</Button>
        </div>

    </div>
  )
}

export default CategorySearch