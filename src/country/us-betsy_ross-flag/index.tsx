import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsBetsyRossFlagSource = require('./us-betsy_ross.webp');

export default function UsBetsyRossFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={UsBetsyRossFlagSource} />;
}
