import { alpha, Box, styled, Typography } from "@mui/material"
import { Icon } from '@iconify/react'
import tree from '@iconify/icons-emojione/deciduous-tree'

const IconWrapperStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(16),
  height: theme.spacing(16),
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`,
  position: 'relative'
}))

const IconColor = styled(IconWrapperStyle)(() => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  margin: 0
}))

const IconColorWrapper = styled('div')(() => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'hidden'
}))

type Props = {
  progress: number
}

export const ProgressIcon = ({ progress }: Props) => {
  return <>
    <Box display='flex' justifyContent='center'>
      <IconWrapperStyle>
        <Icon icon={tree} width={64} height={64} style={{ filter: 'grayscale(1)', opacity: 0.8 }} />
        <IconColorWrapper style={{ height: `${progress}%` }}>
          <IconColor>
            <Icon icon={tree} width={64} height={64} />
          </IconColor>
        </IconColorWrapper>
      </IconWrapperStyle>
    </Box>
    <Typography variant="h5" sx={{ opacity: 0.90 }}>
      {progress}%
    </Typography>
  </>
}