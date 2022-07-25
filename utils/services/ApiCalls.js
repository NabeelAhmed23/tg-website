import calls from "./PromiseHandler/PromiseHandler";

export async function getMegaMenu() {
  try {
    const res = await calls("menu", "get", null, null);
    return res;
  } catch (error) {
    return error;
  }
}

export async function socialLogin(data) {
  try {
    const res = await calls("login/social", "post", data, null);
    return res;
  } catch (err) {
    return err;
  }
}

export async function deleteUser(id, token) {
  try {
    const res = await calls(`user/${id}`, "delete", null, {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
    return res;
  } catch (err) {
    return err;
  }
}
