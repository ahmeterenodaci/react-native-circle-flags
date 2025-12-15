import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsMnFlagSource = require('./us-mn.webp');

export default function UsMnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsMnFlagSource} />;
}
