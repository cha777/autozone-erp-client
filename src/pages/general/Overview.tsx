import { Button, Grid, Typography } from '@material-ui/core';
import BrowserHeader from '../../components/BrowserHeader';
import OutletContainer from '../../components/OutletContainer';
import LatestSalesOverview from '../../components/overview/LatestSalesOverview';
import QuickStatView from '../../components/overview/QuickStatView';
import SalesTrendsOverview from '../../components/overview/SalesTrendsOverview';
import useAuth from '../../hooks/useAuth';
import PlusIcon from '../../icons/Plus';

const greetingText = (): string => {
  var today = new Date();
  var curHr = today.getHours();

  if (curHr < 12) {
    return 'Good Morning';
  } else if (curHr < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};

const Overview = () => {
  const { user } = useAuth();

  const createTransaction = () => {
    console.warn('Create new Transaction');
  };

  return (
    <>
      <BrowserHeader title="Overview" />
      <OutletContainer>
        <Grid container spacing={3}>
          <Grid
            alignItems="center"
            container
            justifyContent="space-between"
            spacing={3}
            item
            xs={12}
          >
            <Grid item>
              <Typography color="textSecondary" variant="overline">
                Overview
              </Typography>
              <Typography color="textPrimary" variant="h5">
                {greetingText()}, {user.name.split(' ')[0]}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                Here&apos;s what&apos;s happening with Autozone today
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                startIcon={<PlusIcon fontSize="small" />}
                variant="contained"
                onClick={() => createTransaction()}
              >
                New Transaction
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <QuickStatView />
          </Grid>
          <Grid item xs={12}>
            <LatestSalesOverview />
          </Grid>
          <Grid item xs={12}>
            <SalesTrendsOverview />
          </Grid>
        </Grid>
      </OutletContainer>
    </>
  );
};

export default Overview;
