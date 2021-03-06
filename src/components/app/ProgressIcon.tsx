import { alpha, Badge, BadgeProps, Box, styled, Typography } from "@mui/material"
import { Icon, IconifyIcon } from '@iconify/react'

const IconWrapperStyle = styled('div')<{ size: number }>(({ theme, size }) => ({
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(16 / size),
  height: theme.spacing(16 / size),
  justifyContent: 'center',
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`,
  position: 'relative',
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

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    height: '40px',
    minWidth: '40px',
    fontSize: 20,
    borderRadius: '20px'
  },
}))

type Props = {
  progress: number
  count: number
  icon: IconifyIcon
  iconMargin?: string
  size?: number
  showProgress?: boolean
}


export const ProgressIcon = ({ progress, icon, count, iconMargin = 'auto', size = 1, showProgress = true }: Props) => {
  return <>
    <Box display='flex' justifyContent='center' sx={{ mt: 2 }}>
      <StyledBadge badgeContent={count} color="primary" overlap="circular">
        <IconWrapperStyle size={size}>
          <Icon icon={icon} width={90 / size} height={90 / size} style={{ filter: 'grayscale(1)', opacity: 0.8, margin: iconMargin }} />
          <IconColorWrapper style={{ height: `${progress}%` }}>
            <IconColor size={size}>
              <Icon icon={icon} width={90 / size} height={90 / size} style={{ margin: iconMargin }} />
            </IconColor>
          </IconColorWrapper>
        </IconWrapperStyle>
      </StyledBadge>
    </Box>
    {progress < 100 && showProgress
      ? <Typography variant="h5" sx={{ opacity: 0.90, mb: 2, }}>
        {progress}%
      </Typography>
      : null
    }
  </>
}
