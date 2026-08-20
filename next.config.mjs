/** @type {import('next').NextConfig} */
const nextConfig = {
  // Sortie autonome : le conteneur de production n'embarque que le nécessaire.
  output: "standalone",
  serverExternalPackages: ["@node-rs/argon2", "@prisma/client"],
};
export default nextConfig;
