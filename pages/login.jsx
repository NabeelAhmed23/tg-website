import { signIn } from "next-auth/react";

export default function login() {
  return (
    <div className="theme-container">
      <button
        type="button"
        className="btn-primary text-white rounded px-3 py-2"
        onClick={() => signIn("google", { callbackUrl: "/user" })}
      >
        Google
      </button>
      <button
        type="button"
        className="btn-primary text-white rounded px-3 py-2"
        onClick={() => signIn("facebook", { callbackUrl: "/user" })}
      >
        Facebook
      </button>
    </div>
  );
}
