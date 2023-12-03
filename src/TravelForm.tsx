import { MenuItem, Select, TextField } from "@mui/material";
import { DateField, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

type TravelData = {
  departureday: string;
  departuremonth: string;
  departureyear: string;
  returnday: string;
  returnmonth: string;
  returnyear: string;
  accommodation: string;
  specialreq: string;
};

type TravelFormProps = TravelData & {
  updateFields: (fields: Partial<TravelData>) => void;
};

export function TravelForm({
  departureday,
  departuremonth,
  departureyear,
  returnday,
  returnmonth,
  returnyear,
  accommodation,
  specialreq,
  updateFields,
}: TravelFormProps) {
  // State to store departure and return dates

  return (
    <div className='flex flex-col p-8'>
      <h1 className='flex justify-center text-black font-semibold'>
        Travel Preferences
      </h1>
      <label className='mb-4'>Departure Date</label>
      {/* <DatePicker
        sx={{ mb: 2 }}
        value={departure}
        onChange={(date) =>
          updateFields({ departure: date ? date.toString() : "" })
        }
      /> */}
      <div className='flex gap-2'>
        <TextField
          id='standard-basic'
          label='Day'
          variant='outlined'
          size='medium'
          value={departureday}
          sx={{ mb: 2 }}
          onChange={(e) => updateFields({ departureday: e.target.value })}
        />
        <TextField
          id='standard-basic'
          label='Month'
          variant='outlined'
          size='medium'
          sx={{ mb: 2 }}
          value={departuremonth}
          onChange={(e) => updateFields({ departuremonth: e.target.value })}
        />
        <TextField
          id='standard-basic'
          label='Year'
          variant='outlined'
          size='medium'
          value={departureyear}
          sx={{ mb: 2 }}
          onChange={(e) => updateFields({ departureyear: e.target.value })}
        />
      </div>
      <label className='mb-4'>Return Date</label>
      <div className='flex gap-2'>
        <TextField
          id='standard-basic'
          label='Day'
          variant='outlined'
          size='medium'
          value={returnday}
          sx={{ mb: 2 }}
          onChange={(e) => updateFields({ returnday: e.target.value })}
        />
        <TextField
          id='standard-basic'
          label='Month'
          variant='outlined'
          size='medium'
          sx={{ mb: 2 }}
          value={returnmonth}
          onChange={(e) => updateFields({ returnmonth: e.target.value })}
        />
        <TextField
          id='standard-basic'
          label='Year'
          variant='outlined'
          size='medium'
          value={returnyear}
          sx={{ mb: 2 }}
          onChange={(e) => updateFields({ returnyear: e.target.value })}
        />
      </div>

      <label className='mb-2'>Accommodation Preference</label>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        sx={{ mb: 4 }}
        value={accommodation}
        onChange={(e) =>
          updateFields({ accommodation: e.target.value as string })
        }
      >
        <MenuItem value='Space Hotel'>Space Hotel</MenuItem>
        <MenuItem value='Martian Base'>Martian Base</MenuItem>
        <MenuItem value='Anti-Gravity Motel'>Anti-Gravity Motel</MenuItem>
      </Select>
      <label className='mb-2'>Special Requests or Preferences</label>
      <TextField
        id='standard-basic'
        variant='outlined'
        size='medium'
        sx={{ mb: 2 }}
        value={specialreq}
        onChange={(e) => updateFields({ specialreq: e.target.value })}
      />
    </div>
  );
}
