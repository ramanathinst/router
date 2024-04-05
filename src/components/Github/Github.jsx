import React from 'react'
import {useLoaderData} from 'react-router-dom'

export default function Github() {

   const data =  useLoaderData()
    return (
        <>
        <div>Github Followers: {data.followers} </div>
        <img src={data.avatar_url} alt="github img" />

        </>
    )
}

// export const githubinfoLoder = async () => {
//     const response = await fetch("https://api.github.com/users/hiteshchoudhary")
//     return response.json()
// }


export const githubInfo = async () => {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary")
        return await response.json()

}