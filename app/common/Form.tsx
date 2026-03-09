import {TextField, Box, TextFieldVariants} from '@mui/material';

interface FormProps {
    formData: {id:string, label:string };
}

export  const Form = (
    {
        formData,
    }: FormProps
) => {
  return (
    <Box>
    <TextField id= {formData.id} label={formData.label} variant= 'outlined' />
    </Box>  )
}
