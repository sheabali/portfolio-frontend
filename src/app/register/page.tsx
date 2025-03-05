'use client';
import Container from '@/components/Container/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { registerUser } from '@/utils/actions/registerUser';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    console.log(data);
    try {
      const res = await registerUser(data);
      console.log(res);

      if (res?.success) {
        toast.success(res.message);
        router.push('/login');
      } else {
        // Handle API response errors
        toast.error(res?.message || 'Registration failed. Please try again.');
      }
    } catch (err: unknown) {
      // Handle unexpected errors
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
      <h1 className="text-center text-4xl font-semibold">Create an account </h1>
      <div className="my-10 mx-auto">
        <div className="mx-auto flex flex-col md:flex-row justify-center gap-11 bg-white rounded-lg">
          <div className="w-full md:w-1/2 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <Input
                  id="username"
                  type="text"
                  {...register('username')}
                  placeholder="Your name"
                  className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black sm:text-sm"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <Input
                  id="email"
                  type="text"
                  {...register('email')}
                  placeholder="Email"
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
                  Create account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
