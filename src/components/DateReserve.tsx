"use client";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

type DateReserveProps = {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: Dayjs | null;
  onNameChange: (value: string) => void;
  onTelChange: (value: string) => void;
  onVenueChange: (value: string) => void;
  onDateChange: (value: Dayjs | null) => void;
};

export default function DateReserve({
  nameLastname,
  tel,
  venue,
  bookDate,
  onNameChange,
  onTelChange,
  onVenueChange,
  onDateChange,
}: DateReserveProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid gap-6 md:grid-cols-2">
        <DatePicker label="Date" value={bookDate} onChange={onDateChange} />
        <TextField name="Name-Lastname" label="Name-Lastname" variant="standard" fullWidth value={nameLastname} onChange={(e) => onNameChange(e.target.value)} />
        <TextField name="Contact-Number" label="Contact-Number" variant="standard" fullWidth value={tel} onChange={(e) => onTelChange(e.target.value)} />
        <FormControl variant="standard" fullWidth>
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select labelId="venue-label" id="venue" name="venue" label="Venue" value={venue} onChange={(e) => onVenueChange(e.target.value)}>
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
      </div>
    </LocalizationProvider>
  );
}
