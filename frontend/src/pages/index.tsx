import Image from "next/image";
import Head from "next/head";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

import Form, { PasswordSchema } from "~/components/Form/Form";
import { login } from "~/api/user";
import { type AxiosError } from "axios";
import { type Error, type User } from "~/types/common";
import useAuth from "~/hooks/auth";
import { useRouter } from "next/router";

const LoginSchema = z.object({
  email: z
    .string()
    .email("Enter a real email please.")
    .describe("Email // Please enter your email"),
  password: PasswordSchema.describe("Password // Please enter your password"),
});

export default function Index() {
  const { signIn } = useAuth();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data: User) => {
      signIn(data.token);
      void router.push("/teams");
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        const data: Error = error.response.data as Error;
        console.log(data.err);
      }
    },
  });

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    mutation.mutate(data);
  }

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="flex min-h-full flex-row">
        <div className="flex w-2/3 items-center justify-center bg-[#242E42] px-4 py-12 text-white sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full">
            <div className="mt-8">
              <div className="mt-6">
                <div className="space-y-6">
                  <Form schema={LoginSchema} onSubmit={onSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/login-bg.png"
            alt="asldkj"
            className="h-full w-full object-contain"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </>
  );
}
