import Link from "next/link";

const InputBoxPlaceholder = () => {
  return (
    <div className="card p-10 text-center">
      <p className="subtitle">
        You must create an account before you can post anything.
      </p>
      <p>Click "Create Account" below to start posting!</p>
      <div className="mt-5">
        <Link href="/auth/register" className="button-blue mx-1 inline-block">
          Create Account
        </Link>
        <Link href="/auth/login" className="button-blue mx-1 inline-block">
          Login
        </Link>
      </div>
    </div>
  );
};

export default InputBoxPlaceholder;
