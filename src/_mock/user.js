import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: sample(["Push Up Boards", "Cocktail Whiskey Smoker", "Light Bulb Camera"]),
  status: sample(['Active', 'Pre-order']),
  qty: sample([2,3,4,5,6,7,8,9,10]) + " items",
  days:sample(['10 to 15 days', '1 to 3 days', '3 to 5 days', '5 to 10 days']),
  cost: "$" +faker.random.numeric(),
  returned: "$"+faker.random.numeric(),
  remaining: sample(["1 Unit", "2 Units", "3 Units"]),
  sold: sample(["1 Unit", "2 Units", "3 Units"])
  
}));

export default users;
