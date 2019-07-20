import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, Text } from 'recharts';

const data = [
  { name: 'NPA', value: 5 },
  { name: 'Green', value: 3 },
  { name: 'OneCity', value: 1 },
  { name: 'COPE', value: 1 },
  { name: 'Independent', value: 1 }
];

const COLORS = ['#360058', '#80C342', '#4DBFA6', '#D50032', '#A9A9A9'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <Text style={{ fontFamily: 'Fact-ExpandedMedium', backgroundColor: 'black' }} width='1em' x={x} y={y} fill='white' textAnchor='middle' dominantBaseline='central' scaleToFit angle='90' >
      {
        `${name}:` +
        `${(percent * 100).toFixed(0)}%`
      }
    </Text>
  );
};

export default class ChartPartyMakeUp extends PureComponent {
  render () {
    return (
      <PieChart width={400} height={400}>
        <Pie
          animationDuration={800}
          data={data}
          cx={'50%'}
          cy={'50%'}
          outerRadius={180}
          fill='black'
          dataKey='value'
          nameKey='name'
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}
