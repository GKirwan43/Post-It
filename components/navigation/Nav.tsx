"use client"

import { auth } from '@/utils/requests/auth'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    auth().then((data) => {
      if (!data.error) {
        setLoggedIn(true);
      }
    })
  })

  return (
    <header className="flex justify-between p-5">
      <Link href='/' className="text-lg font-bold">
        Post It
      </Link>
      <div>
        {loggedIn ? (
          <a className="button-blue px-5 text-sm">
            Logout
          </a>
        ) : (
          <div>
            <Link href="/auth/register" className="button-blue px-5 m-1 text-sm">
              Create Account
            </Link>
            <Link href="/auth/login" className="button-blue px-5 m-1 text-sm">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Nav