import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnUsFlagSource = require('./en-us.webp');

export default function EnUsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnUsFlagSource} />;
}
