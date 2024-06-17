import { useForm } from "react-hook-form";

function RegisterForm() {
  const form = useForm({
    defaultValues: {
      name: "Фасоль красная консервированая",
      quantity: 150,
    },
  });
  const { register, formState, handleSubmit, watch } = form;
  const { errors, isValid, isDirty, touchedFields } = formState;

  const currentName = watch("name");

  function onSend(data) {
    console.log("Register form has been submitted");
    console.log(data);
  }

  console.log(touchedFields);

  return (
    <form onSubmit={handleSubmit(onSend)}>
      <h1>Edit product</h1>
      <label>
        Product name:{" "}
        <input
          style={{
            border: errors.name ? "1px solid red" : "1px solid black",
          }}
          type="text"
          {...register("name", {
            required: "Поле name обязательно!",
            minLength: {
              value: 2,
              message: "Поле должно быть как минимум 2 символа в длинну",
            },
          })}
        />
      </label>
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      <label>
        Количество: <input type="number" {...register("quantity")} />
      </label>

      <button disabled={!isDirty} type="submit">
        Update
      </button>
      <p>isValid: {isValid.toString()}</p>
      <p>isDirty: {isDirty.toString()}</p>
      <p>Name: {currentName}</p>
    </form>
  );
}

export default RegisterForm;
