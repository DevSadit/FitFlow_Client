import { useState } from "react";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import useAuthContext from "../../hooks/useAuthContext";
import useRole from "../../hooks/useRole";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Fieldset,
  Label,
  Legend,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Input } from "postcss";

const MemberProfile = () => {
  const { user, updateUserProfile, setUser, loading } = useAuthContext() || {};
  const [role, isLoading] = useRole();
  const [isOpen, setIsOpen] = useState(false);

const handleUpdateProfile = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const photo = form.photo.value;
  
  console.log(name, photo);
  updateUserProfile(name, photo);
  setUser({ ...user, photoURL: photo, displayName: name });
};
  //
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  //
  console.log(user);
  if (isLoading || loading) return <LoadingSpinner />;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 uppercase px-4 text-xs text-white bg-[#21BDCE] rounded-full">
            {role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <button
                  onClick={open}
                  className="bg-[#21BDCE] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#358992] block mb-1"
                >
                  Update Profile
                </button>
                {/*  */}
                <Transition appear show={isOpen}>
                  <Dialog
                    as="div"
                    className="relative z-10 focus:outline-none"
                    onClose={close}
                  >
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex  min-h-full items-center justify-center p-4">
                        <TransitionChild
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 transform-[scale(95%)]"
                          enterTo="opacity-100 transform-[scale(100%)]"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 transform-[scale(100%)]"
                          leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                          <DialogPanel className="w-full max-w-2xl rounded-xl bg-white/10 p-6 backdrop-blur-2xl">
                            {/*  */}
                            <div className="hero ">
                              <div className="hero-content flex-col lg:flex-row-reverse w-full">
                                <div className="text-center lg:text-left "></div>
                                <div className="shrink-0 w-full bg-base-100  rounded-lg">
                                  <form
                                    onSubmit={handleUpdateProfile}
                                    className="card-body "
                                  >
                                    <div className="form-control">
                                      <label className="label">
                                        <span className="label-text">Name</span>
                                      </label>
                                      <input
                                        defaultValue={user.displayName}
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered"
                                        required
                                      />
                                    </div>
                                    <div className="form-control">
                                      <label className="label">
                                        <span className="label-text">
                                          Email (uneditable)
                                        </span>
                                      </label>
                                      <input
                                        defaultValue={user.email}
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered disabled"
                                        disabled
                                      />
                                    </div>

                                    <div className="form-control">
                                      <label className="label">
                                        <span className="label-text">
                                          Photo url
                                        </span>
                                      </label>
                                      <input
                                        defaultValue={user.photoURL}
                                        type="url"
                                        name="photo"
                                        placeholder="photo url"
                                        className="input input-bordered disabled"
                                        required
                                      />
                                    </div>

                                    <div className="form-control mt-6">
                                      <button
                                        onClick={close}
                                        className="btn bg-[#21BDCE]"
                                      >
                                        Update
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            {/*  */}
                          </DialogPanel>
                        </TransitionChild>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
