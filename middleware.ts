import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isTokenValid } from './utils/auth'  // ajusta el path si necesario

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const isValid = token && isTokenValid(token)

  if (!isValid) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],  // ajusta según las rutas protegidas
}
