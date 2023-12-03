import { FormLabel, MenuItem, Select, TextField } from "@mui/material";

// Define the structure of travel data
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

// Extend TravelData with a function to update partial data
type TravelFormProps = TravelData & {
  updateFields: (fields: Partial<TravelData>) => void;
};

// TravelForm component to capture travel preferences
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
      {/* Section header */}
      <h1 className='flex justify-center text-2xl mb-4 text-black font-semibold'>
        Travel Preferences
      </h1>

      {/* Departure Date Section */}
      <FormLabel className='mb-4'>Departure Date</FormLabel>
      <div className='flex gap-2'>
        {/* Day Input */}
        <TextField
          id='standard-basic'
          label='Day'
          variant='outlined'
          size='medium'
          value={departureday}
          sx={{ mb: 2 }}
          onChange={(e) => updateFields({ departureday: e.target.value })}
        />
        {/* Month Input */}
        <TextField
          id='standard-basic'
          label='Month'
          variant='outlined'
          size='medium'
          sx={{ mb: 2 }}
          value={departuremonth}
          onChange={(e) => updateFields({ departuremonth: e.target.value })}
        />
        {/* Year Input */}
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

      {/* Return Date Section */}
      <FormLabel className='mb-4'>Return Date</FormLabel>
      <div className='flex gap-2'>
        {/* Day Input */}
        <TextField
          id='standard-basic'
          label='Day'
          variant='outlined'
          size='medium'
          value={returnday}
          sx={{ mb: 2 }}
          onChange={(e) => updateFields({ returnday: e.target.value })}
        />
        {/* Month Input */}
        <TextField
          id='standard-basic'
          label='Month'
          variant='outlined'
          size='medium'
          sx={{ mb: 2 }}
          value={returnmonth}
          onChange={(e) => updateFields({ returnmonth: e.target.value })}
        />
        {/* Year Input */}
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

      {/* Accommodation Preference Section */}
      <FormLabel className='mb-2'>Accommodation Preference</FormLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        sx={{ mb: 2 }}
        value={accommodation}
        onChange={(e) =>
          updateFields({ accommodation: e.target.value as string })
        }
      >
        {/* Options for Accommodation */}
        <MenuItem value='Space Hotel'>Space Hotel</MenuItem>
        <MenuItem value='Martian Base'>Martian Base</MenuItem>
        <MenuItem value='Anti-Gravity Motel'>Anti-Gravity Motel</MenuItem>
      </Select>

      {/* Special Requests or Preferences Section */}
      <FormLabel className='mb-2'>Special Requests or Preferences</FormLabel>
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
