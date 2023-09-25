import { PieChart } from '@mui/x-charts/PieChart';
const Statistics = () => {
  let yourDonation = 4;
  
  // Calculate the percentage of your donation
  let yourDonationPercentage = (yourDonation / 12) * 100;
  
  return (
    <div className='flex justify-center items-center'>
      <PieChart
        series={[
          {
            data: [
              {name:"Total", value: 12, label: 'Total Donation' },
              {name:"Given",id: 1, value: yourDonation, label: `${yourDonationPercentage.toFixed(2)}%`, format: value => `${value}%` },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default Statistics;
