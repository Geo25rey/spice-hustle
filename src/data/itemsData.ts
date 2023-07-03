import { Locations, ItemsInfo } from 'types';

const itemsData: ItemsInfo = {
  potat: {
    itemId: 'potat',
    volume: 2,
    weight: 2.5,
    prices: [
      {
        locations: [Locations.Oskah, Locations.Tabbith, Locations.Butre, Locations.Luci],
        seasons: [0, 1],
        actions: ['buy', 'sell'],
        qtyMin: 0,
        qtyMax: 10,
        priceMin: 7,
        priceMax: 10,
      },
      {
        locations: [Locations.Oskah, Locations.Tabbith, Locations.Butre, Locations.Luci],
        seasons: [2, 3],
        actions: ['buy', 'sell'],
        qtyMin: 0,
        qtyMax: 10,
        priceMin: 3,
        priceMax: 6,
      },
    ],
  },
  apple: {
    itemId: 'apple',
    volume: 1,
    weight: 1,
    prices: [
      {
        locations: [Locations.Oskah, Locations.Tabbith, Locations.Butre, Locations.Luci],
        seasons: [0, 1, 2, 3],
        actions: ['buy', 'sell'],
        qtyMin: 0,
        qtyMax: 10,
        priceMin: 4,
        priceMax: 7,
      },
      {
        locations: [Locations.Clionne],
        seasons: [0],
        actions: ['sell'],
        qtyMin: 0,
        qtyMax: 10,
        priceMin: 40,
        priceMax: 55,
      },
      {
        locations: [Locations.Clionne],
        seasons: [1, 2, 3],
        actions: ['sell'],
        qtyMin: 0,
        qtyMax: 4,
        priceMin: 30,
        priceMax: 45,
      },
    ],
  },
};

export default itemsData;