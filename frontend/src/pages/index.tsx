import Image from "next/image";
import Head from "next/head";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import "react-toastify/dist/ReactToastify.css";

import { login } from "~/api/user";
import { type AxiosError } from "axios";
import { type Error, type User } from "~/types/common";
import { useRouter } from "next/router";

const LoginSchema = z.object({
  email: z.string().email("Enter a real email please."),
  password: z.string(),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export default function Index() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data: User) => {
      localStorage.setItem("refreshToken", data.token);
      toast("Logged in successfully!", { delay: 100 });
      // Wait for 2 seconds before redirecting to /teams
      setTimeout(() => {
        void router.push("/teams");
      }, 2000);
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        const data: Error = error.response.data as Error;
        toast.error(data.err, { delay: 100 });
      }
    },
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data: LoginSchemaType) => {
    console.log(data);
    mutation.mutate(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="flex h-screen flex-row justify-end overflow-y-hidden bg-[#242E42] font-serif">
        <div className="m-5 w-full lg:w-2/3">
          {/* Header */}
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="h-16 w-16"
            />
          </div>
          <div className="p-2"></div>
          {/* Form */}
          <div className="m-12 flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-white">
              Judge the People {"<"}3
            </h1>
            <div className="p-3"></div>
            <form
              className="w-full lg:w-2/3"
              onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            >
              <div>
                <Label
                  htmlFor="email"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Email
                </Label>
                <div className="mt-2">
                  <Input
                    type="email"
                    autoComplete="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                    {...register("email", { required: true })}
                  />
                </div>
                <p className="mt-2 block text-sm font-medium leading-6 text-red-400">
                  {errors.email?.message}
                </p>
              </div>
              <div className="p-3"></div>
              <div>
                <Label
                  htmlFor="password"
                  className="block text-xl font-medium leading-6 text-white"
                >
                  Password
                </Label>
                <div className="mt-2">
                  <Input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="*********"
                    {...register("password", { required: true })}
                  />
                </div>
                <p className="mt-2 block text-sm font-medium leading-6 text-red-400">
                  {errors.password?.message}
                </p>
                <div className="p-3"></div>
                <input
                  type="submit"
                  className="rounded-md border border-[#37ABBC] px-6 py-3 text-white transition ease-in hover:cursor-pointer hover:bg-[#37ABBC]"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3">
          <Image
            priority
            src="/login-bg.png"
            alt="Login"
            width={500}
            height={500}
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
