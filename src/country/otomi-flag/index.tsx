import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const OtomiFlagSource = require('./otomi.webp');

export default function OtomiFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={OtomiFlagSource} />;
}
