import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const topup = [...Array(2)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: sample(["Push Up Boards", "Cocktail Whiskey Smoker", "Light Bulb Camera"]),
  status: sample(['Available', 'Pre-order']),
  remaining: sample([2,3,4,5,6,7,8,9,10]) + " items",
  suggested: sample([2,3,4,5,6,7,8,9,10]) + " items",
  cost: "$" +faker.random.numeric(),
  
}));

export default topup;
