import React from 'react'

const Foolowing = () => {

  const followers =[
    {
        id : 1,
        name : "John Doe",
        username: "johndoe",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        role: "College Student",
        followers: 2000,
        status: "Follow"
    },
    {
        id : 2,
        name : "Jane Smith",
        username: "janesmith",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        role: "College Student",
        followers: 500,
        status: "Unfollow"
    },
    {
        id : 3,
        name : "Leanne Graham",
        username: "leannegraham",
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        role: "College Student",
        followers: 500,
        status: "Unfollow"
    },
    {
        id : 4,
        name : "Ervin Howell",
        username: "ervinhowell",
        avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
        role: "College Student",
        followers: 500,
        status: "Follow"
    },
    {
      id : 5,
        name : "Patricia Lebsack",
        username: "patricialebsack",
        avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
        role: "College Student",
        followers: 500,
        status: "Unfollow"
    },
    {
      id : 6,
        name : "Sydney Munoz",
        username: "sydneymunoz",
        avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
        role: "College Student",
        followers: 500,
        status: "Follow"
    },
    {
      id : 7,
        name : "Gavin Lawson",
        username: "gavinlawson",
        avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
        role: "College Student",
        followers: 500,
        status: "Unfollow"
    },
    {
      id : 8,
        name : "Krystal Donaldson",
        username: "krystaldonaldson",
        avatar_url: "https://avatars.githubusercontent.com/u/8?v=4",
        role: "College Student",
        followers: 500,
        status: "Unfollow"
    },
    {
      id : 9,
        name : "Jon Trevino",
        username: "jontrevino",
        avatar_url: "https://avatars.githubusercontent.com/u/9?v=4",
        role: "College Student",
        followers: 500,
        status: "Follow"
    },
    {
      id : 10,
        name : "Yareli Dixon",
        username: "yarelidixon",
        avatar_url: "https://avatars.githubusercontent.com/u/10?v=4",
        role: "College Student",
        followers: 500,
        status: "Unfollow"
    },
]

  return (
    <div>
      <h2 className='ms-4 pt-2 pb-2'>List of User Following you.</h2>
      <div className="row m-1" >
        {
          followers.map(item => (
            <>
            <div className="col-sm-6 col-lg-3">
              <div className="card" key={item.id}>
                <div className="card-body">
                  <img className="rounded-circle mx-auto d-block" alt="avatar1" src={item.avatar_url} width={150} height={150} />
                  <h2 className="card-text ms-2 mb-0">{item.name}</h2>
                  <p className="mb-0 ms-2 h6">{item.role}</p>
                  <p className="ms-2 mb-0">{item.followers} followers</p>
                  <div className='d-grid mt-1'>  
                    <a href=" " className="btn btn-primary btn-block">{item.status}</a>
                  </div>
                </div>
              </div>
            </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Foolowing
