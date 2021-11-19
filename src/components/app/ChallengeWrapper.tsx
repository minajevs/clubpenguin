import { Card, styled } from "@mui/material";

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 5),
  backgroundColor: '#ffffff'
}))

type Props = {
}

export const ChallengeWrapper: React.FC<Props> = ({ children }) => {
  return <RootStyle>
    {children}
  </RootStyle>

}

export default ChallengeWrapper