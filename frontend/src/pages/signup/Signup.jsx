
const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-ful p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Signup 
          <span className="text-blue-600"> Glass💠Chat</span></h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">Username</span>
            </label>
            <input type='text' placeholder="Enter username" className="w-full input input-bordered h-10" />
          </div>
          <div></div>
        </form>
      </div>
    </div>
  )
}

export default Signup