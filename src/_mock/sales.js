import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const sales = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: sample(["Push Up Boards", "Cocktail Whiskey Smoker", "Light Bulb Camera"]),
  status: sample(['In Progress', 'Shipped', "Complete"]),
  qty: sample([2,3,4,5,6,7,8,9,10]) + " items",
  days: sample([2,3,4,5,6,7,8,9,10]) + " days",
  sale: "$" +faker.random.numeric(),
  tprofit: "$"+faker.random.numeric(),
  yprofit: "$"+faker.random.numeric(),
  returned: "$"+faker.random.numeric(),
  irr: "%"+faker.random.numeric()
  
}));

// currently theres no returned and theres no days column
export default sales;
