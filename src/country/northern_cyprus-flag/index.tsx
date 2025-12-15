import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NorthernCyprusFlagSource = require('./northern_cyprus.webp');

export default function NorthernCyprusFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={NorthernCyprusFlagSource} />;
}
