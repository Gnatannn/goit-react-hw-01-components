import data from 'components/Statistics/data.json';
import { Statistics } from './Statistics';

export const StatsHead = () => {
  return <Statistics title="Upload stats" stats={data} />;
};
