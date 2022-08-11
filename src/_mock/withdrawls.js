import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const widthdrawls = [...Array(24)].map((_, index) => ({
  date: sample(["07/27/2007", "04/14/2005", "03/16/2009"]),
  id: faker.datatype.uuid(),
  amount: "$" +faker.random.numeric(),
  bank: sample(["112323", "452342342", "23423424"]),
  routing: sample(["112323", "452342342", "23423424"]),
  status: sample(["Pending", "Complete"]),
  
}));

export default widthdrawls;
