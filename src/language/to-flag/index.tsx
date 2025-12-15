import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ToFlagSource = require('./to.webp');

export default function ToFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ToFlagSource} />;
}
