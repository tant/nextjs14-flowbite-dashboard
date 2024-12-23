import Image from 'next/image'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
   // chỉ là phần nội dung bên trong thôi, ko có sidebar và header
    <main className='p-4 sm:ml-64'>
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-3 gap-4 mb-4">
           <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
           <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">cục map</p>
           </div>
           <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
           <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
           <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
           <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
           <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
           <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
        </div>
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
           <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
           <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
           <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
           <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
           </div>
        </div>
     </div>
    </main>
  )
}
