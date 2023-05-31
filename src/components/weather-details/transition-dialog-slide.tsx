import * as React from 'react';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});
