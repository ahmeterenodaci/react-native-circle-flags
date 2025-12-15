import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UgFlagSource = require('./ug.webp');

export default function UgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UgFlagSource} />;
}
