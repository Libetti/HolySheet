import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="navbar bg-primary text-alt">
            <div className="flex-1">
                <Link href="/dashboard" className="btn btn-ghost text-xl ">
                    HolySheet
                </Link>
                <button className="ml-1">Upload</button>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto placeholder-alt"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img alt="Picture" src="" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href="/dashboard" className="justify-between">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
