import { Box, Card, Grid, Typography } from '@material-ui/core';
import numeral from 'numeral';

interface StatCardProps {
  label: string;
  value?: number;
}

const StatCard = ({ value = 0, label }: StatCardProps) => (
  <Grid
    item
    md={3}
    sm={6}
    xs={12}
    sx={{
      borderRight: (theme) => ({
        md: `1px solid ${theme.palette.divider}`,
      }),
      borderBottom: (theme) => ({
        md: 'none',
        xs: `1px solid ${theme.palette.divider}`,
      }),
      p: 3,
      textAlign: 'center',
    }}
  >
    <Typography color="textPrimary" variant="h5">
      Rs. {numeral(value).format('0,0.00')}
    </Typography>
    <Typography color="textSecondary" sx={{ mt: 1 }} variant="overline">
      {label}
    </Typography>
  </Grid>
);

const QuickStatView = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
    }}
  >
    <Card>
      <Grid alignItems="center" container justifyContent="space-between">
        <StatCard value={4250.0} label={'Total Sales'} />
        <StatCard value={12500.0} label={'Total Purchases'} />
        <StatCard value={230} label={'Total Expenses'} />
        <StatCard value={123} label={'Total Credits'} />
      </Grid>
    </Card>
  </Box>
);

export default QuickStatView;
