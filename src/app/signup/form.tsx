"use client"
import { signupWithEmailAndPassword } from "@/actions/auth/signup"
import FormButton from "@/components/formButton"
import { ArrowRight } from "lucide-react"
import React from "react"

function SignupForm() {
  return (
    <form action={signupWithEmailAndPassword} method="POST" className="mt-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">
            {" "}
            Full Name{" "}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Full Name"
              id="name"
              name="fullName"
            ></input>
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-base font-medium text-gray-900"
          >
            {" "}
            Email address{" "}
          </label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
              id="email"
              name="email"
            ></input>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-base font-medium text-gray-900"
            >
              {" "}
              Password{" "}
            </label>
          </div>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            ></input>
          </div>
        </div>
        <div>
          <FormButton>
            Create Account <ArrowRight className="ml-2" size={16} />
          </FormButton>
        </div>
      </div>
    </form>
  )
}

export default SignupForm
