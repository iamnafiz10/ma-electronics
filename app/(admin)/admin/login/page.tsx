import { Suspense } from "react";
import LoginClient from "../components/LoginClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
    <LoginClient mode="admin" />

    </Suspense>
  );
}
