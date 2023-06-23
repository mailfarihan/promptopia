'use client'

import { useState, useEffect, Profiler} from "react"
import { useRouter, useSearchParams } from "next/navigation"
import AnimatePage from "@app/animatePage"

import Profile from "@components/Profile"

const MyProfile = ({params}) => {
    const searchParams = useSearchParams()
    const userName = searchParams.get('username')

    console.log(params)


    const [usePposts, setUserPosts] = useState([])

    useEffect(() => {
        console.log(userName)

        const fetchPost = async ()=>{
        const res = await fetch(`/api/users/${params.id}/posts`);

        const data = await res.json()

        setUserPosts(data);
        }

        if(params?.id) fetchPost();
    }, [params.id])

    return (
        <AnimatePage>
            <Profile
                name={userName}
                desc={`Welcome to ${userName} personalized profile page`}
                data={usePposts}
            />
        </AnimatePage>
    )
}

export default MyProfile