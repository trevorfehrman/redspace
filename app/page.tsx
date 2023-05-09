import { SignIn, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <h1>sup</h1>
      <UserButton />
      <SignIn />
    </main>
  );
}
