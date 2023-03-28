import { useRouter } from 'next/router'


export default function Product() {

  const { query } = useRouter()
  return (
    <p> {JSON.stringify(query)}</p>
  )
}