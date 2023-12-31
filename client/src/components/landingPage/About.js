import Footer from "./Footer";
import Navbar from "./Navbar";
import name from "../../assets/img/dashboard/admin-user.png";
import email from "../../assets/img/dashboard/admin-email.png";
import dev1 from "../../assets/img/dashboard/dev1.jpg";
import dev2 from "../../assets/img/dashboard/dev2.jpg";
import dev3 from "../../assets/img/dashboard/dev-3.jpeg";
import dev4 from "../../assets/img/dashboard/dev-4.jpeg";
import dev5 from "../../assets/img/dashboard/dev-5.jpeg";
import admin_git from "../../assets/img/dashboard/admin-git.png";
import admin_insta from "../../assets/img/dashboard/admin-insta-2.png";
import admin_linkedin from "../../assets/img/dashboard/admin-linkedin.png";
import admin_card_profile from "../../assets/img/dashboard/admin-card-profile.png";
const About = () => {
  return (
    <div className="body  lg:overflow-hidden lg:h-screen max-h-min flex flex-col h-screen">
      <Navbar></Navbar>

      <div className=" bg-secoundry font-poppins over ">
        <div className="  flex justify-center">
          <h1 className=" p-4 px-8 font-bold  text-3xl ">About us</h1>
        </div>
        <div className="">
          <div>
            <h1 className="flex justify-center font-bold text-xl">
              -- Developers --
            </h1>
            <div className=" grid grid-cols-5 ml-20 mt-12">
              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={dev1}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full border-2"
                  ></img>
                </div>
                <div className="p-4">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Anil kumar Reddy</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-10 mt-1" alt="email"></img>
                    <h4 className="">
                      anilkumar.21bcb7089<br></br>@vitapstudent.ac.in
                    </h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="#">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="#">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="#">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={dev2}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full border-2"
                  ></img>
                </div>
                <div className="p-4">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Venkat Reddy</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">
                      venkat.21bcb7124<br></br>@vitapstudent.ac.in
                    </h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="#">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="#">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="#">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={dev3}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full "
                  ></img>
                </div>
                <div className="p-4  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Subhash</h1>
                  </div>
                  <div className="flex justify-center mt-2 ">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">
                      subhash.21bcb7134<br></br>@vitapstudent.ac.in
                    </h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="#">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="#">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="#">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={dev4}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full border-2"
                  ></img>
                </div>
                <div className="p-4  ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Saideep</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">
                      deep.21bcb7138<br></br>@vitapstudent.ac.in
                    </h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="#">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="#">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="#">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={dev5}
                    alt="admin_profile"
                    className="h-40 w-40 rounded-full border-2 "
                  ></img>
                </div>
                <div className="p-4 ">
                  <div className="flex justify-center ">
                    <img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">K.V.K Naidu</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="h-4 w-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">
                      krisna.21bcb7121<br></br>@vitapstudent.ac.in
                    </h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="#">
                      <img
                        src={admin_insta}
                        className="h-5 w-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="#">
                      <img src={admin_git} className="h-5 w-5" alt="git"></img>
                    </a>
                    <a href="#">
                      <img
                        src={admin_linkedin}
                        className="h-5 w-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
