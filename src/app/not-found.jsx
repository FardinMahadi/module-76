import Link from "next/link";
import React from "react";
import FuzzyText from "./reactbits";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center py-5 min-h-screen">
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
        404
      </FuzzyText>
      <Link href="/" className="hover:underline">
        &lt; Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
