import { TextField } from "@mui/material";

// Define the structure of user data
type UserData = {
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
  email: string;
  phone: number;
};

// Extend UserData with a function to update partial data
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

// UserForm component to capture user information
export function UserForm({
  firstName,
  lastName,
  age,
  nationality,
  email,
  phone,
  updateFields,
}: UserFormProps) {
  return (
    <div className='flex flex-col p-8 items-center'>
      <img
        src='/assets/logo.png'
        alt='logo'
        width={200}
        height={60}
        className='mx-auto mb-4'
      />
      {/* Section header */}
      <h1 className='flex justify-center mb-4 text-black text-2xl font-semibold'>
        Personal Information
      </h1>

      {/* Application form introduction */}
      <div className='flex text-center justify-center text-gray-600'>
        <p>
          Welcome to the Mars Expedition Application Form! Your health and
          safety are of utmost importance to us. Please complete the following
          sections with accurate and detailed information.
        </p>
      </div>

      {/* First Name Input */}
      <TextField
        id='standard-basic'
        label='First Name*'
        variant='outlined'
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        sx={{ mb: 2, mt: 4 }}
      />

      {/* Last Name Input */}
      <TextField
        id='standard-basic'
        label='Last Name*'
        variant='outlined'
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        sx={{ mb: 2 }}
      />

      {/* Age Input */}
      <TextField
        id='standard-basic'
        placeholder='Age'
        label='Age'
        variant='outlined'
        value={isNaN(age) ? "" : age.toString()} // Check if age is NaN
        onChange={(e) => {
          const inputValue = e.target.value;
          const newValue = parseInt(inputValue, 10);

          // Check if newValue is a valid number before updating the state
          updateFields({ age: isNaN(newValue) ? 0 : newValue });
        }}
        sx={{ mb: 2 }}
      />

      {/* Nationality Input */}
      <TextField
        id='standard-basic'
        label='Nationality'
        variant='outlined'
        value={nationality}
        sx={{ mb: 2 }}
        onChange={(e) => updateFields({ nationality: e.target.value })}
      />

      {/* Email Address Input */}
      <TextField
        id='standard-basic'
        label='Email Address*'
        variant='outlined'
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        sx={{ mb: 2 }}
      />

      {/* Phone Number Input */}
      <TextField
        id='standard-basic'
        label='Phone Number*'
        variant='outlined'
        value={isNaN(phone) ? "" : phone.toString()} // Check if age is NaN
        onChange={(e) => {
          const inputValue = e.target.value;
          const newValue = parseInt(inputValue, 10);

          // Check if newValue is a valid number before updating the state
          updateFields({ phone: isNaN(newValue) ? 0 : newValue });
        }}
      />
    </div>
  );
}
