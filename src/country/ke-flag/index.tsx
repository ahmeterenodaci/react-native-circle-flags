import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KeFlagSource = require('./ke.webp');

export default function KeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KeFlagSource} />;
}
