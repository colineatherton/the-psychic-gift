/**
 * STAGING GATE - DELETE THIS FILE FOR PRODUCTION
 *
 * This page provides password protection for the staging site.
 * To remove staging protection:
 * 1. Delete this file (src/app/staging-gate/page.tsx)
 * 2. Delete src/middleware.ts
 * 3. Remove STAGING_ACCESS_KEY from Vercel environment variables
 */

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function validateAccess(formData: FormData) {
  "use server";

  const key = formData.get("key");
  const expectedKey = process.env.STAGING_ACCESS_KEY;

  if (key === expectedKey) {
    const cookieStore = await cookies();
    cookieStore.set("staging_access", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      // Cookie expires in 7 days
      maxAge: 60 * 60 * 24 * 7,
    });
    redirect("/");
  }

  redirect("/staging-gate?error=invalid");
}

export default async function StagingGatePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        backgroundColor: "#18122B",
        color: "#fff",
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Staging Access</h1>
      <p style={{ marginBottom: "2rem", color: "#a99fd1" }}>
        This site is in staging mode. Please enter the access key to continue.
      </p>
      <form action={validateAccess}>
        <input
          type="password"
          name="key"
          placeholder="Access key"
          required
          autoFocus
          style={{
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            border: "1px solid #745ddd",
            borderRadius: "6px",
            marginRight: "0.5rem",
            backgroundColor: "#2a2140",
            color: "#fff",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#745ddd",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Enter
        </button>
      </form>
      {error === "invalid" && (
        <p style={{ marginTop: "1rem", color: "#ff6b6b" }}>
          Invalid access key. Please try again.
        </p>
      )}
    </div>
  );
}
