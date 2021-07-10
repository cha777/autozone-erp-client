import Chart from 'react-apexcharts';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const LatestSalesOverview = () => {
  const theme = useTheme();

  const chart = {
    options: {
      chart: {
        background: 'transparent',
        toolbar: {
          show: false,
        },
      },
      colors: ['#13affe', '#fbab49'],
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: theme.palette.divider,
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        labels: {
          colors: theme.palette.text.secondary,
        },
        show: true,
      },
      plotOptions: {
        bar: {
          columnWidth: '40%',
        },
      },
      stroke: {
        colors: ['transparent'],
        show: true,
        width: 2,
      },
      theme: {
        mode: theme.palette.mode,
      },
      tooltip: {
        theme: theme.palette.mode,
      },
      xaxis: {
        axisBorder: {
          show: true,
          color: theme.palette.divider,
        },
        axisTicks: {
          show: true,
          color: theme.palette.divider,
        },
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          },
        },
      },
      yaxis: {
        axisBorder: {
          color: theme.palette.divider,
          show: true,
        },
        axisTicks: {
          color: theme.palette.divider,
          show: true,
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary,
          },
        },
      },
    },
    series: [
      {
        data: [30, 40, 25, 50, 49, 21, 70, 51],
        name: 'Sales',
      },
      {
        data: [23, 12, 54, 61, 32, 56, 81, 19],
        name: 'Expenses',
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
      }}
    >
      <Card>
        <CardHeader
          subheader={
            <Typography color="textSecondary" variant="body2">
              {'Last 7 Days'}
            </Typography>
          }
          title={'Sales & Expenses Overview'}
        />
        <CardContent>
          <Chart type="bar" height={300} {...chart} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default LatestSalesOverview;
