import type { ReactNode } from "react";
import {
  createTsForm,
  useTsController,
  useDescription,
  createUniqueFieldSchema,
} from "@ts-react/form";
import { z } from "zod";

const TextField = () => {
  const {
    field: { onChange, value },
  } = useTsController<string>();

  const { label, placeholder } = useDescription();

  return (
    <>
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-white"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={placeholder}
            required
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => onChange(e.target.value)}
            value={value ? value : ""}
          />
        </div>
      </div>
    </>
  );
};

const PasswordField = () => {
  const {
    field: { onChange, value },
  } = useTsController<string>();

  const { label, placeholder } = useDescription();

  return (
    <>
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-white"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder={placeholder}
            required
            className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => onChange(e.target.value)}
            value={value ? value : ""}
          />
        </div>
      </div>
    </>
  );
};

const PasswordSchema = createUniqueFieldSchema(z.string(), "password");

const mapping = [
  [z.string(), TextField],
  [PasswordSchema, PasswordField],
] as const;

const FormContainer = ({
  onSubmit,
  children,
  loading,
}: {
  onSubmit: () => void;
  children: ReactNode;
  loading?: boolean;
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {children}
      <div>
        <button
          type="submit"
          className="flex justify-center rounded-md border border-[#37ABBC] px-8 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#37ABBC]"
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const Form = createTsForm(mapping, { FormComponent: FormContainer });

export { PasswordSchema };

export default Form;
