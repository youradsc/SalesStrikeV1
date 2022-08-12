import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const purchases = [...Array(24)].map((_, index) => ({
  date: sample(["07/27/2007", "04/14/2005", "03/16/2009"]),
  transactionID: faker.datatype.uuid(),
  sku: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: sample(["Push Up Boards", "Cocktail Whiskey Smoker", "Light Bulb Camera"]),
  status: sample(['In Progress', 'Shipped', "Complete"]),
  qty: sample([2,3,4,5,6,7,8,9,10]) + " items",
  cost: "$" +faker.random.numeric(),
  tcost: "$"+faker.random.numeric()
  
}));

export default purchases;
