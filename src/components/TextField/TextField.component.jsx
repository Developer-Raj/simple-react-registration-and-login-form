import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label
        htmlFor={field.name}
        data-testid="label"
        className={`${meta.touched && meta.error ? "is-invalid" : ""}`}
      >
        <span className="label">{label}</span>
        <input
          {...field}
          {...props}
          className={`input-fields`}
          autoComplete={"off"}
        />
        <span className="error-message mt-2">
          <ErrorMessage name={field.name} />
        </span>
      </label>
    </>
  );
};

export default TextField;
