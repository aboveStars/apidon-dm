import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-950
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo1.png"
          alt="Logo"
        />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-900
            text-transparent
            bg-clip-text
          "
          >
            Sign in to your account
        </h2>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;