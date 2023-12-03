import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

// Define the structure of health data
type HealthData = {
  healthy: boolean;
  contactname: string;
  contactnumber: number;
  medical: string;
};

// Extend HealthData with a function to update partial data
type HealthFormProps = HealthData & {
  updateFields: (fields: Partial<HealthData>) => void;
};

// HealthForm component to capture health and safety information
export function HealthForm({
  healthy,
  contactname,
  contactnumber,
  updateFields,
  medical,
}: HealthFormProps) {
  return (
    <div className='flex flex-col p-8'>
      {/* Section header */}
      <h1 className='flex justify-center text-2xl mb-4 text-black font-semibold'>
        Health & Safety
      </h1>

      {/* Question about current health */}
      <FormLabel id='demo-radio-buttons-group-label'>
        Are you currently in good health and physically fit for space travel?
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

      {/* Medical Conditions Input */}
      <FormLabel className='mb-2'>
        Do you have any existing medical conditions or allergies that we should
        be aware of?
      </FormLabel>
      <TextField
        id='standard-basic'
        label='Medical Conditions'
        variant='outlined'
        size='medium'
        value={medical}
        sx={{ mb: 2 }}
        onChange={(e) => updateFields({ medical: e.target.value })}
      />

      {/* Emergency Contact Name Input */}
      <FormLabel className='mb-2'>Emergency Contact Name</FormLabel>
      <TextField
        id='standard-basic'
        variant='outlined'
        value={contactname}
        onChange={(e) => updateFields({ contactname: e.target.value })}
        sx={{ mb: 2 }}
      />

      {/* Emergency Contact Phone Number Input */}
      <FormLabel className='mb-2'>Emergency Contact Phone Number</FormLabel>
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
