"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) router.push("/about/address");
    else router.push("/");
  };

  return (
    <div>
      <p>About Page</p>

      <div className="font-normal flex flex-col gap-2 mt-10 text-lg">
        <Link href="/about/address">Address Page</Link>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleNavigation}
        >
          Address page
        </button>
      </div>
    </div>
  );
};

export default page;
