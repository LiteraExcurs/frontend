import { locationTranslator } from '@/utils/locationTranslator';
import { Location } from '@/utils/types'

//todo: Заменить тип с использованием pic
type TTripData = {
  location: Location;
  name: string | undefined;
  slug: string | undefined;
}
export const crumbsData = (data: TTripData) => {
  return [
    {
      title: 'На главную',
      url: '/',
    },
    {
      title: 'Литературные прогулки',
      url: '',
    },
    {
      title: locationTranslator(data?.location),
      url: '',
    },
    {
      title: data?.name,
      url: `/trip/${data?.slug}`,
      current: true,
    },
  ];
};
