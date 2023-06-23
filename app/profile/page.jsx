'use client'

import { useState, useEffect} from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import AnimatePage from "@app/animatePage"


import Profile from "@components/Profile"

const MyProfile = () => {
  const{data:session} = useSession();

  const router = useRouter();
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetchPost = async ()=>{
      const res = await fetch(`/api/users/${session?.user.id}/posts`);

      const data = await res.json()

      setPost(data);
    }

    session?.user.id && fetchPost();
  }, [])
  

  const handleEdit = (post) =>{
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post) =>{
    const hasConfirmed = confirm('Are you sure you want to delete this prompt?')

    if(hasConfirmed){
      try {
        await fetch(`/api/prompt/${post._id.toString()}`,{
          method: 'DELETE',
        })

        const filteredPosts = post.filter((p)=> p._id !== post_id)

        setPost(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <AnimatePage>
      <Profile
        name='My'
        desc='Welcome to your personalized profile page'
        data={post}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </AnimatePage>
  )
}

export default MyProfile