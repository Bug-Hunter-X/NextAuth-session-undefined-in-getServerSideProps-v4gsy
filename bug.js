```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function MyComponent(props) {
  const session = await unstable_getServerSession(ctx, authOptions);
  // ... rest of your component
}
```