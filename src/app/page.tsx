import { getUsers } from '@/actions/home/user'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { capitalize } from '@/lib/utils'
import { AvatarGenerator } from 'random-avatar-generator';
export default async function SignIn() {
  const users = await getUsers()
  const avatarGenerator = new AvatarGenerator();
  
  return (
   <section className='container'>
    <h1 className='text-center text-3xl font-bold p-5'>Audio Caller</h1>
      <div className='flex'>
        <div>
        <ul>
          {users.map((user) => (
            <li key={user.id} className='p-2'>
              <div className='flex gap-3 bg-white shadow-lg p-5 items-center rounded-md w-96 cursor-pointer'>
                <Avatar>
                  <AvatarImage src={avatarGenerator.generateRandomAvatar(user.id)} />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
                <div>
                <p className='font-bold'>{capitalize(user.name as string)}</p>
                <p className={user.status === 'online'?"text-green-600":"text-gray-400"}>{user.status}</p>
                </div>
              </div>
              <hr/>
            </li>
          ))}
        </ul>
        </div>
        <div>

      </div>
      </div>
      
   </section>
  )
}
