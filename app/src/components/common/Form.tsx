interface Props {
  label: string;
  required: boolean;
  type: string;
  name: string;
  placeholder: string;
}

const FormInput = ({ label, required, type, name, placeholder }: Props) => {
  return (
    <div className="w-[90%] md:w-3/5 mx-auto my-8 md:my-10">
      <div className="flex items-center my-4">
        {required ? (
          <div className="bg-orange rounded-full mr-1 md:mr-3 px-3 py-[2px] text-xs md:text-sm text-white">
            必須
          </div>
        ) : (
          <div className="bg-pale_gray rounded-full mr-1 md:mr-3 px-3 py-[2px] text-xs md:text-sm text-white">
            任意
          </div>
        )}

        <label className="text-sm font-bold text-gray">{label}</label>
      </div>

      {required ? (
        <input
          type={type}
          name={name}
          className="bg-pale_yellow w-full h-8 px-2 text-sm md:h-10 md:px-4"
          placeholder={placeholder}
          required
        ></input>
      ) : (
        <input
          type={type}
          name={name}
          className="bg-[#E5E5E5] w-full mx-auto h-8 px-2 text-sm md:px-4"
          placeholder={placeholder}
        ></input>
      )}
    </div>
  );
};

export default FormInput;
