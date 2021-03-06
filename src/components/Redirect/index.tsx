import { useEffect } from 'react'
import { useRouter } from 'next/router'

type Props = {
    to: string
}

export const Redirect = ({ to } : Props) => {
    const router = useRouter()
    useEffect(() => {
        router.push(to)
    }, [to])
    return null
}