import { getCurrentUser } from "@/utils/session";
import { redirect } from "next/navigation";

/*
Going to attempt to build this route using server components this time
rather than client, will see how it works out.
*/

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return <div>Placeholder</div>;
}
