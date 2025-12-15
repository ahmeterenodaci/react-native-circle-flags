import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IeFlagSource = require('./ie.webp');

export default function IeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IeFlagSource} />;
}
