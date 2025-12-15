import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CyFlagSource = require('./cy.webp');

export default function CyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CyFlagSource} />;
}
