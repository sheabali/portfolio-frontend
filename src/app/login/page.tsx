'use client';
import Container from '@/components/Container/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loginUser } from '@/utils/actions/loginUser';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  // console.log()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await loginUser(data);

      if (res?.accessToken) {
        localStorage.setItem('accessToken', res.accessToken);
        router.push('/');
        toast.success(res.message); // Use toast instead of alert
      } else {
        // Handle API response errors
        toast.error(res?.message || 'Login failed. Please try again.');
      }
    } catch (err: unknown) {
      // Handle unexpected errors safely
      if (err instanceof Error) {
        toast.error(err.message);
        console.error('Unexpected error:', err);
      } else {
        toast.error('An unknown error occurred.');
        console.error('Unknown error:', err);
      }
    }
  };

  return (
    <Container>
      <h1 className="text-center text-4xl font-semibold">Login</h1>

      <div className="my-10 mx-auto">
        <div className="mx-auto flex flex-col md:flex-row justify-center gap-11 bg-white rounded-lg">
          <div className="w-full md:w-1/2 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <Input
                  id="email"
                  type="text"
                  {...register('email')}
                  placeholder="Your email"
                  className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black sm:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-6">
                <Input
                  id="password"
                  type="text"
                  {...register('password')}
                  placeholder="Password"
                  className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black sm:text-sm"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center items-center gap-6">
                <Button
                  type="submit"
                  className="w-full my-4 border font-bold py-7 px-4 shadow-md"
                >
                  Login
                </Button>
              </div>
            </form>
            <p className="text-center my-4 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-bold hover:underline">
                Create an account
              </Link>
            </p>
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() =>
                  signIn('google', {
                    callbackUrl:
                      'https://portfolio-frontend-navy.vercel.app/dashboard',
                  })
                }
                className="p-2 border-2 border-gray-800 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="38"
                  height="38"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                </svg>
              </button>
              <button
                onClick={() =>
                  signIn('github', {
                    callbackUrl:
                      'https://portfolio-frontend-navy.vercel.app/dashboard',
                  })
                }
                className="p-2 border-2 border-gray-800 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="38"
                  height="38"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
