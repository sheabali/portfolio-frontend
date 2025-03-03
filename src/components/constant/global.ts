export const logo = 'https://i.ibb.co.com/rRqzCDvN/logo-1.png';
export const BannerImage = 'https://i.ibb.co.com/hJFVBzcY/Frame-20.png';
export const Discord = 'https://i.ibb.co.com/VpN4p92Z/discord.png';
export const Twitter = 'https://i.ibb.co.com/60Vv2ygx/twitter.png';
export const Facebook = 'https://i.ibb.co.com/WNYPSjJd/facebook.png';
export const Github = 'https://i.ibb.co.com/spTbxgnd/github.png';
export const Js = 'https://i.ibb.co.com/rGRq36Wg/js-5968292.png';
export const Mongodb = 'https://i.ibb.co.com/Q7GQ3VnD/mongodb-svgrepo-com.png';
export const Node = 'https://i.ibb.co.com/rRDf7krV/node-svgrepo-com.png';
export const React = 'https://i.ibb.co.com/nMPTWSY0/react.png';
export const Express =
  'https://i.ibb.co.com/WvV30J4D/pngfind-com-pc-master-race-png-1363736.png';
export const Git = 'https://i.ibb.co.com/xS0NbQ7X/social.png';
export const Typescript = 'https://i.ibb.co.com/pjW65hTB/typescript.png';
export const NextJs = 'https://i.ibb.co.com/B5J4VPyz/nextjs-512x512.png';
export const Tailwindcss =
  'https://i.ibb.co.com/DfGpf16R/Tailwind-CSS-Logo-svg.png';
export const Css = 'https://i.ibb.co.com/Gvw749sJ/css-3-732190.png';
export const Redux = 'https://i.ibb.co.com/8nHj8ZgY/redux-512x486.png';
export const Mongoose = 'https://i.ibb.co.com/4DgqF9T/icons8-mongoose-700.png';
export const AboutImg = 'https://i.ibb.co.com/fGt8KCGy/Group-1000015845.png';

export type TProject = {
  createdAt: string | number | Date;
  _id?: string;
  title: string;
  liveLink: string;
  image: string;
  description: string;
  timestamp?: string | number;
};

export type TBlog = {
  _id?: string;
  title: string;
  content: string;
  image: string;
  category: string;
  createdAt?: string | number | Date;
  timestamp?: string | number | Date;
};
