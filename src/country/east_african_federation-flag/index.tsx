import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EastAfricanFederationFlagSource = require('./east_african_federation.webp');

export default function EastAfricanFederationFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={EastAfricanFederationFlagSource} />;
}
