import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Floqer | Terms of Service',
  description: 'Floqer Terms of Service',
};

const page = () => {
  return <iframe src="/assets/terms.html"  className="fixed inset-0 w-screen h-screen overflow-auto" />;
}

export default page;
