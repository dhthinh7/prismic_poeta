import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle redirect to '/'
  if (pathname === '/home') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Handle root ("/") separately
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/home', request.url)) // Rewrite "/" to "/home"
  }

  // Default response
  return NextResponse.next()
}
