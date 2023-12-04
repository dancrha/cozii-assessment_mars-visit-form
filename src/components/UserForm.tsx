import { FormLabel, MenuItem, Select, TextField } from "@mui/material";

// Define the structure of user data
type UserData = {
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  gender: string;
  country: string;
  certs: string;
  email: string;
  phone: string;
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
          <FormLabel className='mb-2'>
            First Name<span className='text-red-500'>*</span>
          </FormLabel>
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
          <FormLabel className='mb-2'>
            Last Name<span className='text-red-500'>*</span>
          </FormLabel>

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
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            sx={{ mb: 2 }}
            value={age}
            onChange={(e) => updateFields({ age: e.target.value as string })}
          >
            {/* Options for Accommodation */}
            <MenuItem value='18'>18</MenuItem>
            <MenuItem value='19'>19</MenuItem>
            <MenuItem value='20'>20</MenuItem>
            <MenuItem value='21'>21</MenuItem>
            <MenuItem value='22'>22</MenuItem>
            <MenuItem value='23'>23</MenuItem>
            <MenuItem value='24'>24</MenuItem>
            <MenuItem value='25'>25</MenuItem>
            <MenuItem value='26'>26</MenuItem>
            <MenuItem value='27'>27</MenuItem>
            <MenuItem value='28'>28</MenuItem>
            <MenuItem value='29'>29</MenuItem>
            <MenuItem value='30'>30</MenuItem>
            <MenuItem value='31'>31</MenuItem>
            <MenuItem value='32'>32</MenuItem>
            <MenuItem value='33'>33</MenuItem>
            <MenuItem value='34'>34</MenuItem>
            <MenuItem value='35'>35</MenuItem>
            <MenuItem value='36'>36</MenuItem>
            <MenuItem value='37'>37</MenuItem>
            <MenuItem value='38'>38</MenuItem>
            <MenuItem value='39'>39</MenuItem>
            <MenuItem value='40'>40</MenuItem>
            <MenuItem value='41'>41</MenuItem>
            <MenuItem value='42'>42</MenuItem>
            <MenuItem value='43'>43</MenuItem>
            <MenuItem value='44'>44</MenuItem>
            <MenuItem value='45'>45</MenuItem>
            <MenuItem value='46'>46</MenuItem>
            <MenuItem value='47'>47</MenuItem>
            <MenuItem value='48'>48</MenuItem>
            <MenuItem value='49'>49</MenuItem>
            <MenuItem value='50'>50</MenuItem>
            <MenuItem value='51'>51</MenuItem>
            <MenuItem value='52'>52</MenuItem>
            <MenuItem value='53'>53</MenuItem>
            <MenuItem value='54'>54</MenuItem>
            <MenuItem value='55'>55</MenuItem>
            <MenuItem value='56'>56</MenuItem>
            <MenuItem value='57'>57</MenuItem>
            <MenuItem value='58'>58</MenuItem>
            <MenuItem value='59'>59</MenuItem>
            <MenuItem value='60'>60</MenuItem>
            <MenuItem value='61'>61</MenuItem>
            <MenuItem value='62'>62</MenuItem>
            <MenuItem value='63'>63</MenuItem>
            <MenuItem value='64'>64</MenuItem>
            <MenuItem value='65'>65</MenuItem>
            <MenuItem value='66'>66</MenuItem>
            <MenuItem value='67'>67</MenuItem>
            <MenuItem value='68'>68</MenuItem>
            <MenuItem value='69'>69</MenuItem>
            <MenuItem value='70'>70</MenuItem>
            <MenuItem value='71'>71</MenuItem>
            <MenuItem value='72'>72</MenuItem>
            <MenuItem value='73'>73</MenuItem>
            <MenuItem value='74'>74</MenuItem>
            <MenuItem value='75'>75</MenuItem>
            <MenuItem value='76'>76</MenuItem>
            <MenuItem value='77'>77</MenuItem>
            <MenuItem value='78'>78</MenuItem>
            <MenuItem value='79'>79</MenuItem>
            <MenuItem value='80'>80</MenuItem>
            <MenuItem value='81'>81</MenuItem>
            <MenuItem value='82'>82</MenuItem>
            <MenuItem value='83'>83</MenuItem>
            <MenuItem value='84'>84</MenuItem>
            <MenuItem value='85'>85</MenuItem>
            <MenuItem value='86'>86</MenuItem>
            <MenuItem value='87'>87</MenuItem>
            <MenuItem value='88'>88</MenuItem>
            <MenuItem value='89'>89</MenuItem>
            <MenuItem value='90'>90</MenuItem>
            <MenuItem value='91'>91</MenuItem>
            <MenuItem value='92'>92</MenuItem>
            <MenuItem value='93'>93</MenuItem>
            <MenuItem value='94'>94</MenuItem>
            <MenuItem value='95'>95</MenuItem>
            <MenuItem value='96'>96</MenuItem>
            <MenuItem value='97'>97</MenuItem>
            <MenuItem value='98'>98</MenuItem>
            <MenuItem value='99'>99</MenuItem>
            <MenuItem value='100'>100</MenuItem>
          </Select>
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
      </div>
      <div className='flex gap-4 mt-4'>
        <div className='flex flex-col'>
          <FormLabel className='mb-2'>
            Email Address<span className='text-red-500'>*</span>
          </FormLabel>

          {/* Email Address Input */}
          <TextField
            id='standard-basic'
            placeholder='someone@example.com'
            variant='outlined'
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            sx={{ mb: 2 }}
          />
        </div>

        <div className='flex flex-col'>
          <FormLabel className='mb-2'>
            Phone Number<span className='text-red-500'>*</span>
          </FormLabel>

          {/* Phone Number Input */}
          <TextField
            id='standard-basic'
            variant='outlined'
            placeholder='XXX-XXX-XXXX'
            value={phone} // Check if age is NaN
            onChange={(e) => {
              const inputValue = e.target.value;
              const newValue = parseInt(inputValue, 10);

              // Check if newValue is a valid number before updating the state
              updateFields({ phone: e.target.value as string });
            }}
          />
        </div>
      </div>
    </div>
  );
}
