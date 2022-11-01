import { useEffect } from 'react';
import {Outlet, Link, useNavigate} from 'react-router-dom'

const AccountLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => console.log('You are in the account page'), 2000)

    return () => {
      console.log('cleared interval')
      clearInterval(interval)
    }
  }, []);

  useEffect(() => {}, [])

  return (
    <>
    <div>Username: Lilian</div>
    <button style={{padding: "20px"}}><Link>Check my payment plan</Link></button>
    <button onClick={() => navigate('purchased')}>See all my products</button>
    <Outlet context='I am data coming from the outlet!'/>
    </>
  )
}

export default AccountLanding