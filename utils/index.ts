import { AppContext } from "next/app";

export const LOCALDOMAIN = "https://ssr-blog-fe7ts2lzi-yeatsczx.vercel.app:3000";
export const CMSDOMAIN = "https://ssr-blog-fe7ts2lzi-yeatsczx.vercel.app:1337";

export const getIsMobile = (context: AppContext) => {
  const { headers = {} } = context.ctx.req || {};
  return /mobile|android|iphone|ipad|phone/i.test(
    (headers["user-agent"] || "").toLowerCase()
  );
};

export const getIsSupportWebp = (context: AppContext) => {
  const { headers = {} } = context.ctx.req || {};
  return headers.accept?.includes("image/webp");
};
