"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
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

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUpSchema } from "@/lib/validations";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import LoginForm from "@/components/forms/LoginForm";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const SignupForm = () => {
  const [name, setName] = useState("");

  const [isFirstStageActive, setIsFirstStageActive] = useState(true);

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      terms: false,
    },
  });

  const onSubmit = (values) => alert(JSON.stringify(values));

  return (
    <>
      {isFirstStageActive ? (
        <ShadcnForm {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[22px]"
          >
            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I am</FormLabel>

                  <ToggleGroup type="single" {...field}>
                    <ToggleGroupItem value="male">Male</ToggleGroupItem>
                    <ToggleGroupItem value="female">Female</ToggleGroupItem>
                  </ToggleGroup>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>My name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        field.onChange(e); // Update react-hook-form state
                      }}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>I was born</FormLabel>

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-[12px] text-left font-normal",
                            !field.value &&
                              "text-[#8789A1] bg-[#F5F7F9] border-none"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto size-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <>
                  <div className="flex items-center gap-x-[15px]">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <span className="text-xs text-[#8789A1]">
                      I have read, understand and agree to Terms of Use, Privacy
                      Policy, Disclosures & Disclaimers.
                    </span>
                  </div>
                  <FormMessage />
                </>
              )}
            />

            <Button variant="main" type="submit">
              Sign up now
            </Button>
          </form>

          <div className="flex justify-center gap-x-[6px]">
            <div
              className="mt-[40px] h-[3px] w-[18px] cursor-pointer rounded-full bg-[#5893FA]"
              onClick={() => setIsFirstStageActive(true)}
            />
            <div
              className="mt-[40px] h-[3px] w-[18px] cursor-pointer rounded-full bg-[#5893FA] opacity-20"
              onClick={() => setIsFirstStageActive(false)}
            />
          </div>
        </ShadcnForm>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default SignupForm;
