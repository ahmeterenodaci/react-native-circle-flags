import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RwFlagSource = require('./rw.webp');

export default function RwFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={RwFlagSource} />;
}
