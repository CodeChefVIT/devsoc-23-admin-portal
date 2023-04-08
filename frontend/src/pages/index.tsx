import Image from "next/image";
import Head from "next/head";
import { z } from "zod";
import Form, { PasswordSchema } from "~/components/Form/Form";

const LoginSchema = z.object({
  email: z
    .string()
    .email("Enter a real email please.")
    .describe("Email // Please enter your email"),
  password: PasswordSchema.describe("Password // Please enter your password"),
});

export default function Index() {
  function onSubmit(data: z.infer<typeof LoginSchema>) {
    console.log(data);
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
