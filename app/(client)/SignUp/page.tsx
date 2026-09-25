"use client";

import SignInForm from "@/app/component/Auth";
import SignUpForm from "@/app/component/Auth/SignUpForm";

export default function SignUp() {
  return (
    <div>
      <SignUpForm />
      <SignInForm />
    </div>
  );
}
