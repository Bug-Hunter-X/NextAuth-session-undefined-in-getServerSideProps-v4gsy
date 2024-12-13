# NextAuth Session Undefined in getServerSideProps

This repository demonstrates a common issue when using NextAuth.js with `getServerSideProps` where the session object remains undefined even after seemingly correct configuration.  The problem often stems from improper usage of `unstable_getServerSession` or incorrect context/authOptions.