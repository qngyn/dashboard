import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import * as React from 'react';

interface AddButtonProps {
  onClick: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <Button variant="contained" startIcon={<AddCircleIcon />} onClick={onClick}>
      Add
    </Button>
  );
};

export default AddButton;
