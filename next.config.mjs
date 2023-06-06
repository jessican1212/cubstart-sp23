import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

// /** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: false,
  },
  reactStrictMode: true,
};

export default nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
})(nextConfig);