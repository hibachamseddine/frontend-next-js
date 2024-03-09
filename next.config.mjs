/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["res.cloudinary.com", "th.bing.com", "cdn.dribbble.com","ikasougou.com"]
  },
  env: {
      API_URL: "http://localhost:3001/api"
  }
}

export default nextConfig;
  