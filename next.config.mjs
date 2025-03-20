/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ], // Adicione o domínio aqui
  },
};

export default nextConfig;
