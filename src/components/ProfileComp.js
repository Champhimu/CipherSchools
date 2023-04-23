import React, { useEffect, useState } from 'react'
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '../images/avatar3.png'
import appdata, {userInfo} from '../utility/appdata'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ProfileComp = () => {

  const [userData, setUserData] = useState(userInfo);
  const navigate = useNavigate();

  const loadProfilePage = async () => {
    try {
      const res = await fetch(appdata.baseUrl+"/getdata", {
          method: "POST",
          headers: {
              //send cookies
              cookie:Cookies.get('jwtoken'),
              "Content-Type": "application/json"
          },
          body:JSON.stringify({
              cookie:Cookies.get('jwtoken')
          })
      });
      // console.log(res);
      if (res.status >= 201) {
          throw new Error(res.error);
      }
      const data = await res.json();
      // console.log(data);
      Object.entries(data).forEach((e) => {if(userInfo[e[0]]!==undefined){userInfo[e[0]]= e[1]}});
      // console.log(userInfo);
      setUserData(data);
  } catch (error) {
      console.log(error);
  }
  }

  useEffect(() => {
    if(!sessionStorage.getItem('loggedin')){
      navigate('/login');
    }
    if(!userInfo.creationdate ){
      loadProfilePage();
    }else{
      setUserData(userInfo);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
    <div class="container">
    <div class="main-body mt-1">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
              <div class="position-relative mb-2">
                {/* <div className='card-title fs-5 ms-3 mt-2 '>ON THE WEB</div> */}
                <button  type='button' className='btn btn-info position-absolute top-0 end-0 mt-2 me-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                </div>
                {/* <button type="button" class="btn-sm btn btn-info">Primary</button>     */}
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src={Avatar} alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <p className='fs-5 mb-0'>Hello,</p>
                      <h4>{userData.name}</h4>
                      <p class="text-secondary mb-1">{userData.email}</p>
                      {/* <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                      {/* <button class="btn btn-primary">Follow</button> */}
                      {/* <button class="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <div class="position-relative mb-2">
                <div className='card-title fs-5 ms-3 mt-2 '>ON THE WEB</div>
                <button  type='button' className='btn btn-info position-absolute top-0 end-0 mt-2 me-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><LinkedInIcon/>Linkedin</h6>
                    <span class="text-secondary">{userData.name}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><GitHubIcon /> Github</h6>
                    <span class="text-secondary">{userData.name}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><FacebookIcon />Facebook</h6>
                    <span class="text-secondary">{userData.name}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><TwitterIcon /> Twitter</h6>
                    <span class="text-secondary">@{userData.name}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><InstagramIcon />Instagram</h6>
                    <span class="text-secondary">{userData.name}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><LanguageIcon/> Website</h6>
                    <span class="text-secondary">https://{userData.name}.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                    <div className='card-title fs-5'>Cipher Map</div>
                    <CalendarHeatmap
                        startDate={new Date('2022-01-01')}
                        endDate={new Date('2022-11-01')}
                        values={[
                            // {date:, count: },
                            {date:'2022-01-10', count: 1 },
                            {date:'2022-01-11', count: 1 },
                            {date:'2022-01-12', count: 1 },
                            {date:'2022-01-13', count: 1 },
                            {date:'2022-01-14', count: 1 },
                            {date:'2022-01-19', count: 1 },
                            {date:'2022-01-26', count: 1 },
                            { date: '2022-01-31', count: 12 },
                            {date:'2022-02-01', count: 1 },
                            {date:'2022-02-02', count: 1 },
                            {date:'2022-02-03', count: 1 },
                            {date:'2022-02-04', count: 1 },
                            // {date:'2022-02-05', count: 1 },

                            {date:'2022-02-14', count: 1 },
                            {date:'2022-02-21', count: 1 },
                            {date:'2022-02-28', count: 1 },
                            { date: '2022-02-22', count: 122 },
                            {date:'2022-02-23', count: 1 },
                            {date:'2022-02-24', count: 1 },
                            {date:'2022-02-18', count: 1 },
                            {date:'2022-02-25', count: 1 },
                            {date:'2022-03-04', count: 1 },

                            {date:'2022-03-14', count: 1 },
                            {date:'2022-03-15', count: 1 },
                            {date:'2022-03-16', count: 1 },
                            {date:'2022-03-17', count: 1 },
                            {date:'2022-03-18', count: 1 },
                            {date:'2022-03-22', count: 1 },
                            {date:'2022-03-30', count: 1 },
                            {date:'2022-04-05', count: 1 },
                            {date:'2022-04-11', count: 1 },
                            {date:'2022-04-12', count: 1 },
                            {date:'2022-04-13', count: 1 },
                            {date:'2022-04-14', count: 1 },
                            {date:'2022-04-15', count: 1 },

                            {date:'2022-04-28', count: 1 },
                            {date:'2022-04-29', count: 1 },
                            {date:'2022-04-27', count: 1 },
                            {date:'2022-05-03', count: 1 },
                            {date:'2022-05-04', count: 1 },
                            {date:'2022-05-09', count: 1 },
                            {date:'2022-05-11', count: 1 },
                            {date:'2022-05-17', count: 1 },
                            {date:'2022-05-18', count: 1 },
                            {date:'2022-05-25', count: 1 },
                            {date:'2022-05-26', count: 1 },
                            {date:'2022-05-27', count: 1 },

                            {date:'2022-06-06', count: 1 },
                            {date:'2022-06-07', count: 1 },
                            {date:'2022-06-08', count: 1 },
                            {date:'2022-06-09', count: 1 },
                            {date:'2022-06-10', count: 1 },
                            {date:'2022-06-14', count: 1 },
                            {date:'2022-06-22', count: 1 },
                            {date:'2022-06-30', count: 1 },
                            {date:'2022-07-08', count: 1 },
                            {date:'2022-07-07', count: 1 },
                            {date:'2022-07-06', count: 1 },
                            {date:'2022-07-05', count: 1 },
                            {date:'2022-07-04', count: 1 },

                            {date:'2022-07-20', count: 1 },
                            {date:'2022-07-19', count: 1 },
                            {date:'2022-07-25', count: 1 },
                            {date:'2022-07-27', count: 1 },
                            {date:'2022-08-08', count: 1 },
                            {date:'2022-08-01', count: 1 },
                            {date:'2022-08-03', count: 1 },
                            {date:'2022-08-10', count: 1 },
                            {date:'2022-08-11', count: 1 },
                            {date:'2022-08-05', count: 1 },
                            {date:'2022-07-29', count: 1 },
                            {date:'2022-07-22', count: 1 },

                            {date:'2022-08-22', count: 1 },
                            {date:'2022-08-23', count: 1 },
                            {date:'2022-08-24', count: 1 },
                            {date:'2022-08-25', count: 1 },
                            {date:'2022-08-26', count: 1 },
                            {date:'2022-08-31', count: 1 },
                            {date:'2022-09-07', count: 1 },
                            {date:'2022-09-12', count: 1 },
                            {date:'2022-09-13', count: 1 },
                            {date:'2022-09-14', count: 1 },
                            {date:'2022-09-15', count: 1 },
                            {date:'2022-09-16', count: 1 },

                            {date:'2022-09-26', count: 1 },
                            {date:'2022-09-27', count: 1 },
                            {date:'2022-09-28', count: 1 },
                            {date:'2022-09-29', count: 1 },
                            {date:'2022-10-07', count: 1 },
                            {date:'2022-10-14', count: 1 },
                            {date:'2022-10-21', count: 1 },
                            {date:'2022-10-24', count: 1 },
                            {date:'2022-10-25', count: 1 },
                            {date:'2022-10-26', count: 1 },
                            {date:'2022-10-27', count: 1 },

                            // { date: '2022-01-30', count: 38 },
                            // ...and so on
                        ]}
                        />
                    </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">PROFESSIONAL INFORMATION</h6>
                      <button  type='button' className='btn btn-info position-absolute top-0 end-0 mt-2 me-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                      <label for="formGroupExampleInput" class="form-label">Highest education</label>
                      <select class="form-select" aria-label="Default select example">
                        <option >Select Highest education</option>
                        <option value="1">Primary</option>
                        <option value="2">Secondary</option>
                        <option selected value="3">Graduation</option>
                        <option value="3">Post Graduation</option>
                      </select>
                      <label for="formGroupExampleInput" class="form-label mt-2">What do you do currently</label>
                      <select class="form-select" aria-label="Default select example">
                        <option >Open this select menu</option>
                        <option value="1">Schooling</option>
                        <option selected value="2">College Students</option>
                        <option value="3">Teaching</option>
                        <option value="4">Job</option>
                        <option value="5">Freelancing</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">PASSWORD & SECURITY</h6>
                      <button  type='button' className='btn btn-info position-absolute top-0 end-0 mt-2 me-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                      <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                        <div class="col-sm-12">
                        <input type="password" class="form-control" id="inputPassword"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-12 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3">INTEREST</h6>
                      <button  type='button' className='btn btn-info position-absolute top-0 end-0 mt-2 me-2'>Edit</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
    </div>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileComp
