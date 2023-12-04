import { FormLabel, MenuItem, Select, TextField } from "@mui/material";

// Define the structure of user data
type UserData = {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  gender: string;
  country: string;
  certs: string;
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
  middleName,
  lastName,
  age,
  gender,
  country,
  certs,
  email,
  phone,
  updateFields,
}: UserFormProps) {
  return (
    <div className='flex flex-col columns-2 p-8 items-center'>
      <img
        src='/assets/logo.png'
        alt='logo'
        width={200}
        height={60}
        className='mx-auto mb-4'
      />
      {/* Section header */}
      <h1 className='flex justify-center mb-4 text-black text-2xl font-semibold font-mono'>
        Personal Information
      </h1>

      {/* Application form introduction */}
      <div className='flex text-center justify-center text-gray-600 font-mono'>
        <p>
          Welcome to the Mars Expedition Application Form! Your health and
          safety are of utmost importance to us. Please complete the following
          sections with accurate and detailed information.
        </p>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-8'>
        {/* First Name Input */}
        <div className='flex flex-col'>
          <FormLabel className='mb-2'>First Name*</FormLabel>
          <TextField
            id='standard-basic'
            variant='outlined'
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            sx={{ mb: 2 }}
          />
        </div>

        <div className='flex flex-col'>
          <FormLabel className='mb-2'>Middle Name</FormLabel>

          <TextField
            id='standard-basic'
            variant='outlined'
            value={middleName}
            onChange={(e) => updateFields({ middleName: e.target.value })}
            sx={{ mb: 2 }}
          />
        </div>

        <div className='flex flex-col'>
          <FormLabel className='mb-2'>Last Name*</FormLabel>

          {/* Last Name Input */}
          <TextField
            id='standard-basic'
            variant='outlined'
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            sx={{ mb: 2 }}
          />
        </div>

        <div className='flex flex-col'>
          <FormLabel className='mb-2'>Age</FormLabel>

          {/* Age Input */}
          <TextField
            id='standard-basic'
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
        </div>

        <div className='flex flex-col'>
          <FormLabel className='mb-2'>Gender</FormLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            sx={{ mb: 2 }}
            value={gender}
            onChange={(e) => updateFields({ gender: e.target.value as string })}
          >
            {/* Options for Accommodation */}
            <MenuItem value='Male'>Male</MenuItem>
            <MenuItem value='Female'>Female</MenuItem>
            <MenuItem value='Non-Binary'>Non-Binary</MenuItem>
            <MenuItem value='Prefer not to say'>Prefer not to say</MenuItem>
          </Select>
        </div>

        <div className='flex flex-col'>
          <FormLabel className='mb-2'>Country</FormLabel>

          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            sx={{ mb: 2 }}
            value={country}
            onChange={(e) =>
              updateFields({ country: e.target.value as string })
            }
          >
            <MenuItem value='USA'>United States of America</MenuItem>
            <MenuItem value='Canada'>Canada</MenuItem>
            <MenuItem value='UK'>United Kingdom</MenuItem>
            <MenuItem value='Australia'>Australia</MenuItem>
            <MenuItem value='Germany'>Germany</MenuItem>
            <MenuItem value='France'>France</MenuItem>
            <MenuItem value='Japan'>Japan</MenuItem>
            <MenuItem value='China'>China</MenuItem>
            <MenuItem value='India'>India</MenuItem>
            <MenuItem value='Brazil'>Brazil</MenuItem>
            <MenuItem value='South Africa'>South Africa</MenuItem>
            <MenuItem value='Russia'>Russia</MenuItem>
            <MenuItem value='Mexico'>Mexico</MenuItem>
            <MenuItem value='South Korea'>South Korea</MenuItem>
            <MenuItem value='Italy'>Italy</MenuItem>
          </Select>
        </div>

        {/* <div className='flex flex-col'>
          <FormLabel className='mb-2'>Certifications</FormLabel>

          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            sx={{ mb: 2 }}
            value={certs}
            onChange={(e) => updateFields({ certs: e.target.value as string })}
          >
            <MenuItem value='AstroNavigator'>
              AstroNavigator Certification
            </MenuItem>
            <MenuItem value='ZeroGravityPro'>Zero Gravity Proficiency</MenuItem>
            <MenuItem value='CosmicSurvival'>Cosmic Survival Training</MenuItem>
            <MenuItem value='StarshipPilot'>Starship Piloting License</MenuItem>
            <MenuItem value='ExoSuitOperation'>
              Exo-Suit Operation Mastery
            </MenuItem>
            <MenuItem value='InterstellarCommunication'>
              Interstellar Communication Specialist
            </MenuItem>
            <MenuItem value='SpaceMedic'>Space Medical Training</MenuItem>
            <MenuItem value='AstroEngineer'>
              Astro-Engineering Accreditation
            </MenuItem>
            <MenuItem value='OrbitalBotanist'>
              Orbital Botanist Certification
            </MenuItem>
            <MenuItem value='CelestialGeologist'>
              Celestial Geology Expertise
            </MenuItem>
            <MenuItem value='AstroBiologist'>Astrobiology Researcher</MenuItem>
            <MenuItem value='QuantumAstrophysicist'>
              Quantum Astrophysics Proficiency
            </MenuItem>
          </Select>
        </div> */}
      </div>
      <div className='flex gap-4 mt-4'>
        <div className='flex flex-col'>
          <FormLabel className='mb-2'>Email Address*</FormLabel>

          {/* Email Address Input */}
          <TextField
            id='standard-basic'
            variant='outlined'
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            sx={{ mb: 2 }}
          />
        </div>

        <div className='flex flex-col'>
          <FormLabel className='mb-2'>Phone Number*</FormLabel>

          {/* Phone Number Input */}
          <TextField
            id='standard-basic'
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
      </div>
    </div>
  );
}
