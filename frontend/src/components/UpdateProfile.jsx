import { FaUser } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function UpdateProfile() {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr] bg-gray-50">
      <div className="hidden border-r bg-gray-200/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6 bg-gray-100">
            <Link className="flex items-center gap-2 font-semibold text-lg text-gray-800">
              <FaIndianRupeeSign />
              <span>PayApp</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                to={"/dashboard"}
              >
                <IoHomeOutline />
                Dashboard
              </Link>

              <Link className="flex items-center gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900  transition-all hover:text-gray-900">
                <FaUser />
                Update Profile
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
          <Link className="lg:hidden" href="#">
            <span className="sr-only">Home</span>
          </Link>

          <div className="w-full flex-1">
            <h1 className="font-semibold text-xl text-gray-800">
              Update Profile
            </h1>
          </div>

          <LogoutButton />
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Profile</h1>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
            <div className="col-span-3 flex flex-col gap-6">
              <div className="rounded-lg bg-white text-gray-950 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-3 bg-gray-200 rounded-t-lg">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Personal Information
                  </h3>
                </div>
                <div className="p-6 pt-3">
                  <form className="space-y-5">
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <label className="text-sm font-medium leading-none text-gray-800 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          First Name
                        </label>
                        <input
                          className="shadow-sm flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="firstName"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium leading-none text-gray-800 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Last Name
                        </label>
                        <input
                          className="shadow-sm flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="receiver"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <button className="rounded-md bg-gray-800 text-white hover:bg-gray-700 hover:bg-gray-900/90 h-10 px-4 py-2">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-span-3 flex flex-col gap-6">
              <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
                <div className="flex flex-col space-y-1.5 p-3 bg-gray-200 rounded-t-lg">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Change Password
                  </h3>
                </div>
                <div className="p-6 pt-3">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none text-gray-800 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        New Password
                      </label>
                      <input
                        className="shadow-sm flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="newPassword"
                        placeholder="Enter new password"
                      />
                    </div>

                    <button className="rounded-md bg-gray-800 text-white hover:bg-gray-700 hover:bg-gray-900/90 h-10 px-4 py-2">
                      Change Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default UpdateProfile;
