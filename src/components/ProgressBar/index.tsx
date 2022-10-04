import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const LinearProgressWithLabel = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
}));

interface ProgressBarProps {
  maxValue: number
  barColor: string
}

export function ProgressBar({maxValue, barColor}: ProgressBarProps) {

  return (
    <Stack sx={{ width: '100%', color: barColor }} spacing={2} style={{ marginTop: '0.4rem', zIndex: '-1' }}>
      <LinearProgressWithLabel color="inherit" variant="determinate" value={maxValue} />
    </Stack>
  )
}