import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> Glass💠Chat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 m-2 inline-block  text-gray-300"
          >
            {"Don't"} have an account?
          </Link>
          <button className="btn btn-block btn-sm mt-2" disabled={loading}>
            {loading ? (
              <span className="loaidng loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

//Starter Code

// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Login
//           <span className="text-blue-500"> Glass💠Chat</span>
//           </h1>
//           <form>
//               <div>
//                   <label className="label">
//                       <span className="text-base label-text text-gray-300">Username</span>
//                   </label>
//                   <input type='text' placeholder="Enter username" className="w-full input input-bordered h-10" />
//               </div>
//               <div>
//                  <label className="label">
//                   <span className="text-base label-text text-gray-300">Password</span>
//                   </label>
//                   <input type='password' placeholder="Enter password" className="w-full input input-bordered h-10" />
//               </div>
//               <a href='#' className="text-sm hover:underline hover:text-blue-600 m-2 inline-block  text-gray-300">
//                   {"Don't"} have an account?</a>
//               <button className="btn btn-block btn-sm mt-2">Login</button>
//               </form>
//         </div>
//         </div>
//     )
//   }

//   export default Login
