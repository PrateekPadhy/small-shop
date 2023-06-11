import styled from '@emotion/styled';
import { Button } from '@mui/material';

const HeaderButton = styled(Button)(() => ({
  '&:hover': {
    backgroundColor: 'inherit',
  },
}));

export default HeaderButton;
