import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { InputControllerProps } from "./InputController.interface";
import { NumberController } from "./NumberController";

export const InputController = (props: InputControllerProps) => {
  const { control } = useFormContext();

  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <Controller
        name={props.name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            {props.type === "number" ? (
              <NumberController field={field} props={props} />
            ) : (
              <input
                onChange={field.onChange}
                defaultValue={field.value}
                type={props.type ?? "text"}
                placeholder={props.placeholder}
                id={props.id}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            )}
            {fieldState?.error?.type && (
              <p className="text-red-500">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};
