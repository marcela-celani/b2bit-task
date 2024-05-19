import NavBar from "../components/NavBar";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useState, useEffect } from "react";
import { getProfile } from "../services/APIService";
import { ProfileData } from "../models/types";



const HomePage = () => {
  useProtectedPage();

  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const profileInfo = () => {
    getProfile()
      .then((data) => {
        setProfileData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    profileInfo();
  }, []);

  return (
    <div className="w-full flex flex-col bg-gray-dark h-screen">
      <NavBar />
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <article className="bg-white w-356 h-315 flex flex-col justify-center items-center shadow-l rounded-3xl p-7">
          <section className="flex flex-col justify-center items-center pb-2">
            <h2 className="text-sm font-semibold pb-1">Profile picture</h2>
            <figure className="bg-gray-light-font rounded-xl  w-20 h-20 flex justify-center items-center">
              {profileData?.avatar?.low ? (
                <img
                  src={profileData.avatar.low}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                "s/ foto"
              )}
            </figure>
          </section>
          <section className="w-full">
            <div className="pb-5">
              <div className="flex">
                <h2 className="block text-gray-700 text-md mb-1">
                  Your <span className="font-bold">Name</span>
                </h2>
              </div>
              <div className="w-full h-12 px-5 bg-gray-light rounded-lg flex items-center">
                <p className="text-sm text-gray-dark-font">
                  {profileData?.name}
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex">
                <h2 className="block text-gray-700 text-md mb-1">
                  Your <span className="font-bold">E-mail</span>
                </h2>
              </div>
              <div className="w-full h-12 px-5 bg-gray-light rounded-lg flex items-center">
                <p className="text-sm text-gray-dark-font">
                  {profileData?.email}
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default HomePage;
