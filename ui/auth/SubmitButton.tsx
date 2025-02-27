import { useFormStatus } from "react-dom";
import clsx from "clsx";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className={clsx(
        "border w-full py-4 text-gray-50 text-md font-semibold text-xl rounded-lg",
        pending
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-green-600 hover:bg-gray-900  hover:transition-colors "
      )}
      disabled={pending}
    >
      {pending ? (
        <div className='flex justify-center gap-3'>
          <div className='rounded-full animate-spin h-6 w-6 border-t-2 border-white'></div>
          <p>sedang proses</p>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;
