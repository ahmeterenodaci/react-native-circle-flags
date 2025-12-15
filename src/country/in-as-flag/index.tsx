import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InAsFlagSource = require('./in-as.webp');

export default function InAsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={InAsFlagSource} />;
}
