export interface Service {
  id: string;
  title: string;
  isHighlighted?: boolean;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Smart Contracts',
  },
  {
    id: '2',
    title: 'Protocol Architecture',
  },
  {
    id: '3',
    title: 'Onchain Games',
  },
  {
    id: '4',
    title: 'Cross-Chain Integrations',
  },
  {
    id: '5',
    title: 'Security Engineering',
  },
  {
    id: '6',
    title: 'Audits & Reviews',
  },
  {
    id: '7',
    title: 'Tokenomics Design',
  },
  {
    id: '8',
    title: 'ZK & L2 Deployment',
  },
]; 