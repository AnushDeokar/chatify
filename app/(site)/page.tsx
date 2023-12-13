"use client";
import Image from "next/image";
import React from "react";
import AuthForm from "@/components/auth-form";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface details {
  username: string;
  email: string;
  password: string;
}
export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formstate, setFormState] = useState("LOGIN");
  const [details, setDetails] = useState<details>({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/chat");
    }
  }, [status]);

  const handleSubmit = async () => {
    if (formstate === "REGISTER") {
      await axios
        .post("/api/register", details)
        .then(() =>
          signIn("credentials", {
            ...details,
            redirect: false,
          })
        )
        .then((callback) => {
          if (callback?.error) {
            console.log(callback.error);
            console.log("Invalid credentials!");
          }

          if (callback?.ok) {
            router.push("/chat");
          }
        })
        .catch(() => console.log("Something went wrong!"));
    } else {
      handleSubmit2();
    }
  };

  const handleSubmit2 = async () => {
    await signIn("credentials", {
      ...details,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials!");
        } else if (callback?.ok) {
          toast.success("Successfully Logged In!");
          router.push("/chat");
        }
      })
      .catch(() => console.log("Something went wrong!"));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <main className="md:px-20 pl-10 pr-5 lg:px-40 h-screen md:overflow-hidden">
      <div className="flex justify-between mt-10 w-full">
        <img src="chatify.png" className="h-14" />
        <ul className="md:flex hidden justify-evenly font-semibold gap-8 text-sm items-center">
          <li className="cursor-pointer hover:border-b-4 pb-2 border-transparent hover:border-blue-500 transition">
            Features
          </li>
          <li className="cursor-pointer hover:border-b-4 pb-2 border-transparent hover:border-blue-500 transition">
            Desktop App
          </li>
          <li className="cursor-pointer hover:border-b-4 pb-2 border-transparent hover:border-blue-500 transition">
            Privacy and safety
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20">
        <div className="text-left pr-[20%] z-20">
          <h1 className="major-head md:text-7xl text-5xl font-semibold z-20">
            Hang out anytime, Anywhere
          </h1>
          <p className="text-slate-600 my-6">
            Chatify makes it easy and fun to stay close to your favourite
            people.
          </p>

          <div>
            <>
              {status === "unauthenticated" && (
                <main className="flex justify-around flex-col text-left">
                  {formstate === "REGISTER" ? (
                    <form className="w-full max-w-sm">
                      <div className="md:flex mb-4">
                        <input
                          name="username"
                          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-blue-500"
                          id="inline-full-name"
                          type="text"
                          placeholder="Username"
                          onChange={onChange}
                          value={details.username}
                        />
                      </div>
                      <div className="md:flex mb-4">
                        <input
                          name="email"
                          placeholder="Email"
                          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-blue-500"
                          id="inline-full-name"
                          type="text"
                          onChange={onChange}
                          value={details.email}
                        />
                      </div>
                      <div className="md:flex md:items-center mb-4">
                        <input
                          name="password"
                          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-blue-500"
                          id="inline-password"
                          type="password"
                          placeholder="Passwprd"
                          onChange={onChange}
                          value={details.password}
                        />
                      </div>
                      <div className="flex items-center mt-2">
                        <button
                          className="hover:bg-blue-400 mr-auto bg-blue-500 focus:shadow-outline focus:outline-none roun text-white font-bold py-2 px-4 rounded-full"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Sign Up
                        </button>
                        <h3 className="flex  text-gray-700 justify-center text-sm">
                          <span>
                            Already have an account?{" "}
                            <button
                              onClick={() => {
                                setFormState("LOGIN");
                              }}
                              className="text-sky-500"
                            >
                              Login
                            </button>
                          </span>
                        </h3>
                      </div>

                      {/* <div>
                        <h3 className="flex sign-up-with mt-5 text-gray-700">
                          <span>or sign in with</span>
                        </h3>
                        <AuthForm />
                      </div> */}
                    </form>
                  ) : (
                    <form className="w-full max-w-sm">
                      <div className="md:flex md:items-center mb-4">
                        <input
                          name="email"
                          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-blue-500"
                          id="inline-full-name"
                          type="text"
                          onChange={onChange}
                          value={details.email}
                          placeholder="Email"
                        />
                      </div>
                      <div className="md:flex mb-4">
                        <input
                          name="password"
                          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-blue-500"
                          id="inline-password"
                          type="password"
                          placeholder="Password"
                          onChange={onChange}
                          value={details.password}
                        />
                      </div>
                      <div className="flex gap-4 items-center">
                        <button
                          className="shadow bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Log In
                        </button>
                        <h3 className=" text-gray-700 text-sm">
                          <span>
                            Don&apos;t have an account?{" "}
                            <button
                              onClick={() => {
                                setFormState("REGISTER");
                              }}
                              className="text-sky-500 m-auto"
                            >
                              Signup
                            </button>
                          </span>
                        </h3>
                      </div>

                      {/* <div>
                <h3 className="flex sign-up-with mt-5 text-gray-700">
                  <span>or sign in with</span>
                </h3>
                <AuthForm />
              </div> */}
                    </form>
                  )}
                </main>
              )}
            </>
          </div>
        </div>
        <div>
          <img src="hangout.png" className="h-[500px]" />
        </div>
      </div>
    </main>
  );
}
