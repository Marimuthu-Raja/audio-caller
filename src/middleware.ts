import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { HOME, SIGNIN, SIGNUP } from './constants/paths'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === SIGNIN || path === SIGNUP

  const token = request.cookies.get('token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL(HOME, request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL(SIGNIN, request.nextUrl))
  }
    
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/signin",
    "/signup"
  ]
}