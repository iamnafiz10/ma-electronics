// "use client";
//
// import React from "react";
// import Link from "next/link";
//
// function Page() {
//     return (
//         <section id="register-section" className="min-h-screen flex items-center justify-center bg-gray-50">
//             <div className="w-full max-w-lg mx-4 bg-white border border-gray-300 rounded-lg p-6">
//                 {/* Header */}
//                 <div className="text-center mb-6">
//                     <h1 className="text-[20px] font-semibold text-primary">Maa Electronics!</h1>
//                     <h2 className="text-[22px] font-bold mt-2">Register</h2>
//                 </div>
//
//                 {/* Form */}
//                 <form action="" method="POST" className="space-y-4">
//                     {/* Name */}
//                     <div>
//                         <label className="block mb-1 text-[14px] font-medium">
//                             Name <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter your name"
//                             required
//                             className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2
//                             focus:outline-none focus:border-primary"
//                         />
//                     </div>
//
//                     {/* Email*/}
//                     <div>
//                         <label className="block mb-1 text-[14px] font-medium">
//                             Email <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter email"
//                             required
//                             className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2
//                                 focus:outline-none focus:border-primary"
//                         />
//                     </div>
//
//                     {/*Phone*/}
//                     <div>
//                         <label className="block mb-1 text-[14px] font-medium">
//                             Phone <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                             type="tel"
//                             placeholder="Enter phone"
//                             required
//                             className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2
//                                 focus:outline-none focus:border-primary"
//                         />
//                     </div>
//
//                     {/* Password & Confirm Password */}
//                     <div className="block space-y-4 md:space-y-0 md:flex gap-3">
//                         <div className="flex-1">
//                             <label className="block mb-1 text-[14px] font-medium">
//                                 Password <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter password"
//                                 required
//                                 className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2
//                                 focus:outline-none focus:border-primary"
//                             />
//                         </div>
//                         <div className="flex-1">
//                             <label className="block mb-1 text-[14px] font-medium">
//                                 Confirm Password <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Confirm password"
//                                 required
//                                 className="w-full text-[14px] border border-gray-300 rounded-md px-3 py-2
//                                 focus:outline-none focus:border-primary"
//                             />
//                         </div>
//                     </div>
//
//                     {/* Register Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-primary border border-primary cursor-pointer text-white py-2 rounded-md
//                         hover:bg-transparent hover:text-primary transition"
//                     >
//                         Register
//                     </button>
//                 </form>
//
//                 {/* Footer */}
//                 <div className="text-center mt-6 text-sm">
//                     <span className="text-gray-600">Already have an account?</span>{" "}
//                     <Link
//                         href="/user/login"
//                         className="text-primary font-medium hover:underline"
//                     >
//                         Login
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// }
//
// export default Page;