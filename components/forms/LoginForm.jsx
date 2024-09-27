"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  Form as ShadcnForm,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/forms/SignupForm";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFirstStageActive, setIsFirstStageActive] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => alert(JSON.stringify(values));

  return (
    <>
      {isFirstStageActive ? (
        <SignupForm />
      ) : (
        <ShadcnForm {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[22px]"
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-x-[5px]">
              <Image
                src="/assets/logo.svg"
                alt="Livebeam logo"
                width={18}
                height={15}
              />
              <span>livebeam</span>
            </div>

            <Button
              variant="main"
              type="button"
              className="relative bg-[#1A73E8] text-xs font-normal"
            >
              <Image
                src="/assets/google.svg"
                alt="Google"
                width={32}
                height={32}
                className="absolute left-[4px] !size-[32px] rounded-[6px] bg-white"
              />
              <span>Sign up with Google</span>

              <span className="absolute bottom-[-25px] text-[#8789A1]">or</span>
            </Button>

            {/* Email */}
            <FormField
              // control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="e.g. Alex@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              // control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="main" type="submit" className="font-normal">
              Log in
            </Button>

            <p className="mt-[10px] text-center text-xs text-[#595B75]">
              You hereby confirm that you are fully able and competent to access
              Livebeam and comply with the Terms of Use & Service, and are at
              least eighteen (18) years of age or the age of majority under the
              law of the jurisdiction of your residence and the one you are
              accessing Livebeam from.
            </p>
          </form>

          <div className="flex justify-center gap-x-[6px]">
            <div
              className="mt-[40px] h-[3px] w-[18px] cursor-pointer rounded-full bg-[#5893FA] opacity-20"
              onClick={() => setIsFirstStageActive(true)}
            />
            <div
              className="mt-[40px] h-[3px] w-[18px] cursor-pointer rounded-full bg-[#5893FA]"
              onClick={() => setIsFirstStageActive(false)}
            />
          </div>
        </ShadcnForm>
      )}
    </>
  );
};

export default LoginForm;
