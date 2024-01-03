import Layout from '@/layout'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';
  
export default function UserDetail() {
  const [name, setName] = useState('')
  const router = useRouter();
  const { id } = router?.query;

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => { setName(res.name) })
      .catch((err) => console.log(err))
  }, [])

  return (
  <Layout>
    <p>Users by Name {name}</p>
    <p>Users by ID {id}</p>
  </Layout>
  );
}