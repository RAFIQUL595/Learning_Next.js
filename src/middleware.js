import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   return NextResponse.redirect(new URL('/', request.url))
  const dummyData = {
    role: "admin", // or "user"
    email: "admin@gmail.com",
  };

  const cookie = request.cookies.get("nextjs-token");
  console.log(cookie.value);
  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyData.role === "admin";

  if (isServicesPage && !isAdmin) {
    // return NextResponse.redirect(new URL("/login", request.url));
    return NextResponse.rewrite(new URL("/login", request.url));
  }
  //   console.log("PathName:", request.nextUrl.pathname.startsWith("/services"));
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
