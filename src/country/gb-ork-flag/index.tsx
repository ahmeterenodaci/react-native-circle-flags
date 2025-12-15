import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GbOrkFlagSource = require('./gb-ork.webp');

export default function GbOrkFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GbOrkFlagSource} />;
}
