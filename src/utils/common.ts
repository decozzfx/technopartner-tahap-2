import formatter from "src/utils/numbro";
const { formatDecimal } = formatter;

export const numericInputFormatter = {
  /** Format numeric string to text field value */
  formatter: (value: string): string => {
    if (value == null || value === "" || value === ".") {
      return "";
    }
    const filteredValue = value.replace(/[^0-9.]/g, "");
    if (!formatDecimal(filteredValue)) return "";
    if (filteredValue.endsWith(".")) {
      return `${formatDecimal(
        filteredValue.slice(0, filteredValue.length - 1)
      )}.`;
    }
    if (filteredValue.includes(".")) {
      const splitted = filteredValue.split(".");
      const leftValue = formatDecimal(splitted[0]);
      const rightValue = splitted[1] ?? "";
      return `${leftValue}.${rightValue}`;
    }
    return formatDecimal(filteredValue) || "";
  },
  /** Format incoming text value to numeric string from onChange */
  validator: (value: string, decimal = 8): string => {
    const filteredValue = value.replace(
      new RegExp(`[^0-9.]|^\\.$|(?<=\\.\\d{${decimal}}).*`, "g"),
      ""
    );
    if (Number.isNaN(Number(filteredValue))) return "";
    return filteredValue;
  },
};
