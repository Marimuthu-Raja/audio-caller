"use client"
import { login } from "@/actions/auth/signin"
import FormButton from "@/components/formButton"
import { ArrowRight } from "lucide-react"
import React from "react"
import { toast } from "sonner"

function SigninForm() {
  return (
    <form
      action={async (formData: FormData) => {
        const response = await login(formData)
        if (response.success) {
          toast(response.success, {
            position: "top-right",
            dismissible: true,
            duration: 2000,
            style: {
              backgroundColor: "green",
              color: 'white'
            },
          })
        } else {
          toast(response.error, {
            position: "top-right",
            dismissible: true,
            duration: 2000,
            style: {
              backgroundColor: "red",
              color:'white'
            },
          })
        }
      }}
      method="POST"
      className="mt-8"
    >
      <div className="space-y-5">
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
              name="email"
              id="email"
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
              name="password"
              id="password"
            ></input>
          </div>
        </div>
        <div>
          <FormButton>
            Get started <ArrowRight className="ml-2" size={16} />
          </FormButton>
        </div>
      </div>
    </form>
  )
}

export default SigninForm
