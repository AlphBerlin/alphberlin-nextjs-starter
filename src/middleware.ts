import { NextResponse, type NextRequest } from 'next/server'
import { createMiddlewareClient } from '@/utils/supabase'
import { SUPPORTED_LANGUAGES } from '@/lib/i18n'

export async function middleware(request: NextRequest) {
  try {
    // This `try/catch` block is only here for the interactive tutorial.
    // Feel free to remove once you have Supabase connected.
    const { supabase, response } = createMiddlewareClient(request)

    // Refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
    await supabase.auth.getSession()
    // Check if language is already set in URL or cookie
    const searchParams = request.nextUrl.searchParams
    const langParam = searchParams.get('lang')
    const langCookie = request.cookies.get('i18nextLng')?.value

    // If language is already set, continue
    if (langParam || langCookie) {
      return response
    }

    // Detect language from Accept-Language header
    const acceptLanguage = request.headers.get('Accept-Language') || ''
    const preferredLanguage = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim())
      .find((lang) =>
        SUPPORTED_LANGUAGES.includes(lang.substring(0, 2) as string),
      )

    // If a supported language is found, redirect with that language
    if (preferredLanguage) {
      const lang = preferredLanguage.substring(0, 2)
      if (SUPPORTED_LANGUAGES.includes(lang as string)) {
        const url = new URL(request.url)
        url.searchParams.set('lang', lang)
        return NextResponse.redirect(url)
      }
    }

    // Otherwise continue with the default response
    return response
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: { headers: request.headers },
    })
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|/locale/*).*)',
  ],
}
