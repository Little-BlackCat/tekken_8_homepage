import { auth, signOut } from "@/auth"

export default async function SettingsPage() {
  const session = await auth()

  return (
    <>
    {!JSON.stringify(session) && (
      <div>
        <form action={async () => {
          'use server';
          await signOut(); 
        }}>
          <button type="submit">Sign Out</button>
        </form>
      </div>
    )}
    </>
  )
}
