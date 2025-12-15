import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UnitedNationsFlagSource = require('./united_nations.webp');

export default function UnitedNationsFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={UnitedNationsFlagSource} />;
}
