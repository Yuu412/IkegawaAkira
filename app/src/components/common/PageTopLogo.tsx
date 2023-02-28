import Image from "next/image";
import Link from "next/link";

const PageTopLogo = () => {
  return (
    <Link href="/">
      <div className="mx-auto w-11/12">
        <Image
          className={"absolute w-16 top-1 md:w-24"}
          src="/assets/image/logo/logo.png"
          alt="loupe"
          width={1500}
          height={1500}
          priority={true}
        />
      </div>
    </Link>
  );
};

export default PageTopLogo;
