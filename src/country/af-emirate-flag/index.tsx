import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AfEmirateFlagSource = require('./af-emirate.webp');

export default function AfEmirateFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AfEmirateFlagSource} />;
}
