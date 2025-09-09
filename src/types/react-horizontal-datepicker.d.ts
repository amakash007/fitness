declare module 'react-horizontal-datepicker' {
  interface DatePickerProps {
    getSelectedDay: (date: Date) => void;
    endDate?: number;
    selectDate?: Date;
    labelFormat?: string;
    color?: string;
  }

  const DatePicker: React.FC<DatePickerProps>;
  export default DatePicker;
}
