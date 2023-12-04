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
  launchsite: string;
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
  launchsite,
  specialreq,
  updateFields,
}: TravelFormProps) {
  // State to store departure and return dates

  return (
    <div className='flex flex-col p-8'>
      <img
        src='/assets/logo.png'
        alt='logo'
        width={200}
        height={60}
        className='mx-auto mb-4'
      />
      {/* Section header */}
      <h1 className='flex justify-center font-mono text-2xl mb-4 text-black font-semibold'>
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
        <MenuItem value='Habitat Pod'>Habitat Pod</MenuItem>
        <MenuItem value='Red Planet Retreat'>Red Planet Retreat</MenuItem>
        <MenuItem value='Cosmic Campsite'>Cosmic Campsite</MenuItem>
        <MenuItem value='Stellar Suite'>Stellar Suite</MenuItem>
        <MenuItem value='Galactic Guesthouse'>Galactic Guesthouse</MenuItem>
        <MenuItem value='Astro Lodge'>Astro Lodge</MenuItem>
        <MenuItem value='Celestial Cabin'>Celestial Cabin</MenuItem>
        <MenuItem value='Space Bunker'>Space Bunker</MenuItem>
        <MenuItem value='Zero-G Residence'>Zero-G Residence</MenuItem>
        <MenuItem value='Orbit Oasis'>Orbit Oasis</MenuItem>
        <MenuItem value='Infinity Inn'>Infinity Inn</MenuItem>
        <MenuItem value='Interplanetary Inn'>Interplanetary Inn</MenuItem>
        <MenuItem value='Nebula Nest'>Nebula Nest</MenuItem>
        <MenuItem value='Starship Suite'>Starship Suite</MenuItem>
        <MenuItem value='Solar System Sanctuary'>
          Solar System Sanctuary
        </MenuItem>
      </Select>

      <FormLabel className='mb-2'>Launch Site Preference</FormLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        sx={{ mb: 2 }}
        value={launchsite}
        onChange={(e) => updateFields({ launchsite: e.target.value as string })}
      >
        <MenuItem value='KennedySpaceCenter'>
          Kennedy Space Center, USA
        </MenuItem>
        <MenuItem value='BaikonurCosmodrome'>
          Baikonur Cosmodrome, Kazakhstan
        </MenuItem>
        <MenuItem value='GuianaSpaceCentre'>
          Guiana Space Centre, French Guiana
        </MenuItem>
        <MenuItem value='VostochnyCosmodrome'>
          Vostochny Cosmodrome, Russia
        </MenuItem>
        <MenuItem value='WenchangSpacecraftLaunchSite'>
          Wenchang Spacecraft Launch Site, China
        </MenuItem>
        <MenuItem value='SatishDhawanSpaceCentre'>
          Satish Dhawan Space Centre, India
        </MenuItem>
        <MenuItem value='TanegashimaSpaceCenter'>
          Tanegashima Space Center, Japan
        </MenuItem>
        <MenuItem value='AlcântaraSpaceCenter'>
          Alcântara Space Center, Brazil
        </MenuItem>
        <MenuItem value='SpaceXSpaceport'>
          SpaceX Spaceport, Mars Orbit
        </MenuItem>
        <MenuItem value='BlueOriginLaunchSite'>
          Blue Origin Launch Site, Mars Orbit
        </MenuItem>
        <MenuItem value='ESAExoSpaceport'>
          ESA Exo Spaceport, Mars Orbit
        </MenuItem>
        <MenuItem value='MarsColonizationInitiative'>
          Mars Colonization Initiative, Mars Surface
        </MenuItem>
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
