import { useSession, signOut } from "next-auth/react";
import { deleteUser } from "../utils/services/ApiCalls";

export default function user() {
  const session = useSession();
  async function handleUserDelete() {
    const res = await deleteUser(
      session.data.user.user_id,
      session.data.user.token,
    );
    console.log(res);
  }
  return (
    <div className="theme-container pt-4">
      <p>{session.data?.user.name}</p>
      <p>{session.data?.user.email}</p>
      <button
        type="button"
        className="btn-primary rounded px-3 py-2 text-white"
        onClick={() => signOut()}
      >
        Logout
      </button>
      <button
        type="button"
        className="btn-primary rounded px-3 py-2 text-white"
        onClick={handleUserDelete}
      >
        Delete Account
      </button>
    </div>
  );
}
