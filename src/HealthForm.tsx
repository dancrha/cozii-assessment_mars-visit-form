import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

type HealthData = {
  healthy: boolean;
  contactname: string;
  contactnumber: number;
};

type HealthFormProps = HealthData & {
  updateFields: (fields: Partial<HealthData>) => void;
};

export function HealthForm({
  healthy,
  contactname,
  contactnumber,
  updateFields,
}: HealthFormProps) {
  return (
    <div className='flex flex-col p-8'>
      <h1 className='flex justify-center text-black font-semibold'>
        Health & Safety
      </h1>
      <FormLabel id='demo-radio-buttons-group-label'>
        Are you healthy?
      </FormLabel>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
        value={healthy ? "yes" : "no"}
        onChange={(e) => updateFields({ healthy: e.target.value === "yes" })}
      >
        <FormControlLabel value='yes' control={<Radio />} label='Yes' />
        <FormControlLabel
          value='no'
          control={<Radio />}
          label='No'
          sx={{ mb: 2 }}
        />
      </RadioGroup>
      <label className='mb-2'>Emergency Contact Name</label>
      <TextField
        id='standard-basic'
        variant='outlined'
        value={contactname}
        onChange={(e) => updateFields({ contactname: e.target.value })}
        sx={{ mb: 2 }}
      />
      <label className='mb-2'>Emergency Contact Phone Number</label>
      <TextField
        id='standard-basic'
        variant='outlined'
        sx={{ mb: 2 }}
        value={isNaN(contactnumber) ? "" : contactnumber.toString()} // Check if age is NaN
        onChange={(e) => {
          const inputValue = e.target.value;
          const newValue = parseInt(inputValue, 10);

          // Check if newValue is a valid number before updating the state
          updateFields({ contactnumber: isNaN(newValue) ? 0 : newValue });
        }}
      />
    </div>
  );
}
