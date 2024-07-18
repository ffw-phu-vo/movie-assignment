import { NumberFormatValues, NumericFormat } from "react-number-format";
import { NumberControllerProps } from "./NumberController.interface";

export const NumberController = ({ field, props }: NumberControllerProps) => {
  return (
    <NumericFormat
      onValueChange={(values: NumberFormatValues) =>
        field.onChange(values.floatValue)
      }
      value={field.value}
      placeholder={props.placeholder}
      id={props.id}
      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      thousandSeparator={true}
      decimalScale={3}
      fixedDecimalScale={true}
      allowNegative={false}
    />
  );
};
