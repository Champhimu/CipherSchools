import React,{useState} from 'react'
import { Grid, Card, Tabs, Tab, Box } from '@mui/material';
import UserLogin from './UserLogin';
import Registration from './Registration';
import authentication from '../../images/Authentication.png'

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}

const LogReg = () => {
  
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
    <Grid container sx={{ height: '90vh' }}>
      <Grid item lg={7} sm={5} sx={{
        backgroundImage: `url(${authentication})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'block' },
        maxWidth: '100%',
        height: '100%',
        
      }}>
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ mx: 3, height: 530 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='#503118' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel>
          </Box>
        </Card>
      </Grid>
    </Grid>
    </>
  )
}

export default LogReg;
