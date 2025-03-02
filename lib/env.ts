export const env = {
  NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY!,
}

// Validate that the required environment variables are set
if (!env.NEXT_PUBLIC_GOOGLE_API_KEY) {
  throw new Error('GOOGLE_API_KEY is not set in the environment variables')
}
