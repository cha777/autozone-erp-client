import Chart from 'react-apexcharts';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import numeral from 'numeral';

const data = {
  series: [
    {
      color: '#13affe',
      data: 56,
      name: 'This Month',
    },
    {
      color: '#fbab49',
      data: 24,
      name: 'Last Month',
    },
  ],
};

const SalesTrendsOverview = () => {
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
        name: 'This month',
      },
      {
        data: [23, 12, 54, 61, 32, 56, 81, 19],
        name: 'Last month',
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
              {'This month vs Last month'}
            </Typography>
          }
          title={'Sales Trend'}
        />
        <CardContent>
          <Chart height="360" type="area" {...chart} />
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex' }}>
          {data.series.map((item) => (
            <Box
              key={item.name}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
                px: 2,
                py: 3,
                textAlign: 'center',
                '&:not(:last-of-type)': {
                  borderRight: 1,
                  borderColor: 'divider',
                },
              }}
            >
              <Typography color="textPrimary" variant="h4">
                {numeral(item.data).format('0,0.00')}
              </Typography>
              <Typography color={item.color} variant="overline">
                {'Average Sales'}
              </Typography>
              <Typography color="textSecondary" variant="overline">
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default SalesTrendsOverview;
