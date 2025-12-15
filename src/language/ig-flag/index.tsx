import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IgFlagSource = require('./ig.webp');

export default function IgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IgFlagSource} />;
}
