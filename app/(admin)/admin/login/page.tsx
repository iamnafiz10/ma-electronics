export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="container">
               <div className="grid grid-cols-2">
                   <div className="col">
                       <div className="bg-white p-6 rounded-lg">
                           <h2 className="text-xl font-bold mb-4 text-center">
                               Admin Login
                           </h2>

                           <input
                               placeholder="Email"
                               className="w-full border p-2 rounded mb-3"
                           />

                           <input
                               type="password"
                               placeholder="Password"
                               className="w-full border p-2 rounded mb-4"
                           />

                           <button className="w-full bg-primary text-white py-2 rounded">
                               Login
                           </button>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    );
}