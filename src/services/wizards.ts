import { wizardHousesLink } from '@/constants/API';
import { useQuery } from '@tanstack/react-query';

export async function fetchWizardHouses() {
  const wizards = fetch(wizardHousesLink)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return [];
    });

  return wizards;
}

export function useWizardHousesQuery() {
  const wizards = useQuery({
    queryKey: ['wizards'],
    queryFn: fetchWizardHouses,
  });

  return wizards;
}

export default useWizardHousesQuery;
