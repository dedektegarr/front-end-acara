import { Button, Card, CardBody, Input, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller } from "react-hook-form";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 lg:gap-20">
      <div className="flex w-full lg:w-1/3 flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.svg"
          alt="Logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustration/login.svg"
          alt="Illustration"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        />
      </div>
      <Card>
        <CardBody className="flex flex-col w-full gap-3 p-8">
          <div>
            <h2 className="text-xl font-bold text-danger-500">
              Create Account
            </h2>
            <p>
              Have an account?&nbsp;
              <Link
                href="/auth/login"
                className="text-danger-500 font-semibold"
              >
                Login here
              </Link>
            </p>
          </div>
          <form
            action=""
            className="flex flex-col w-full sm:w-80 gap-3"
            onSubmit={handleSubmit(handleRegister)}
          >
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isInvalid={errors.fullName !== undefined}
                  errorMessage={errors.fullName?.message}
                  variant="bordered"
                  type="text"
                  placeholder="Fullname"
                />
              )}
            />
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isInvalid={errors.username !== undefined}
                  errorMessage={errors.username?.message}
                  variant="bordered"
                  type="text"
                  placeholder="Username"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isInvalid={errors.email !== undefined}
                  errorMessage={errors.email?.message}
                  variant="bordered"
                  type="email"
                  placeholder="Email"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
                  variant="bordered"
                  type={visiblePassword.password ? "text" : "password"}
                  placeholder="Password"
                  endContent={
                    <button
                      type="button"
                      className="focus:outline-none"
                      onClick={() => handleVisiblePassword("password")}
                    >
                      {visiblePassword.password ? (
                        <FaEyeSlash className="text-xl text-default-400" />
                      ) : (
                        <FaEye className="text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  isInvalid={errors.confirmPassword !== undefined}
                  errorMessage={errors.confirmPassword?.message}
                  variant="bordered"
                  type={visiblePassword.confirmPassword ? "text" : "password"}
                  placeholder="Password Confirmation"
                  endContent={
                    <button
                      type="button"
                      className="focus:outline-none"
                      onClick={() => handleVisiblePassword("confirmPassword")}
                    >
                      {visiblePassword.confirmPassword ? (
                        <FaEyeSlash className="text-xl text-default-400" />
                      ) : (
                        <FaEye className="text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />
            <Button
              size="lg"
              type="submit"
              className="bg-danger-500 text-white"
              isDisabled={isPendingRegister}
            >
              {isPendingRegister ? (
                <Spinner color="white" size="sm" />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
