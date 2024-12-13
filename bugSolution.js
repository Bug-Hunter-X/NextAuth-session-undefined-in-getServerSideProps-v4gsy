```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default function MyComponent({ session }) {
  // Access session here
  console.log(session);
  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
    </div>
  );
}
```