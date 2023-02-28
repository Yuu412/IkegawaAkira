import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  complementaryColor: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  complementaryColor = false,
}: Props) => {
  return (
    <div
      className={
        complementaryColor
          ? "container w-screen text-center text-white my-8 md:my-28 mx-auto"
          : "container w-screen text-center text-orange my-8 md:my-28 mx-auto"
      }
    >
      {complementaryColor ? (
        <Image
          className={"w-[30px] lg:w-[60px] mx-auto my-3"}
          src="/assets/image/home/section-title-divider-complementary-color.png"
          alt="section-title-divider"
          width={125}
          height={700}
        />
      ) : (
        <Image
          className={"w-[30px] lg:w-[60px] mx-auto my-3"}
          src="/assets/image/home/section-title-divider.png"
          alt="section-title-divider"
          width={125}
          height={700}
        />
      )}

      <h1 className="text-[1.4rem] md:text-[1.8rem] font-semibold my-1">
        {title}
      </h1>
      <h2 className="text-xs md:text-sm">{subtitle}</h2>
    </div>
  );
};

export default SectionTitle;
