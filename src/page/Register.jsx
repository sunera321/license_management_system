import React from 'react'

const Register = () => {
  return (
    //registation form
    <div>
      name : <input type='text' placeholder='name' value="name" className="border-collapse"></input><br>
      </br>
      email : <input type='email' placeholder='email' value="email"></input><br></br>
      <button>
            <a href="/mainhome" className="bg-gray-800">Login</a>
        </button>

    </div>
  )
}

export default Register