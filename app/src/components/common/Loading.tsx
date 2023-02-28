import Image from "next/image";

const Loading = () => {
  return (
    <div className="text-center mx-auto my-40">
      <Image
        className={"mx-auto w-12 duration-1000"}
        src="/assets/image/common/loading.gif"
        alt="loading"
        width={128}
        height={128}
      />
    </div>
  );
};

export default Loading;
