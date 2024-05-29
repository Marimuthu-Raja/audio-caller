"use client"
import React, { FC } from "react"
import { useFormStatus } from "react-dom"
import { PulseLoader } from "react-spinners"

interface Props {
  children: React.ReactNode
}

const FormButton: FC<Props> = ({ children }) => {
  const { pending } = useFormStatus()
  return (
    <button
      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
      type="submit"
      disabled={pending}
    >
      {pending ? <PulseLoader color="#fff" /> : children}
    </button>
  )
}

export default FormButton
