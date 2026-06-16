'use client'

import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { useState } from "react"

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
  })

  console.log('signup data:', data)
  console.log('signup error:', error)

  if (error) {
    setMessage(error.message)
    return
  }

  setMessage('新登録が完了いたしました。ログインしてください。')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="text-center text-2xl font-bold text-gray-900">新規登録</h1>

        <p className="mt-2 text-center text-sm text-gray-600">
          プロフィール共有アプリのアカウントを作成します
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5"> 
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              パスワード
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 outline-none focus:border-blue-500"
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
            登録する
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          すでにアカウントをお持ちの方は{' '}
          <Link href="/login" className="font-semibold text-blue-600">
            ログイン
          </Link>
        </p>
      </div>
    </main>
  )
}