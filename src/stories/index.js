/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import 'font-awesome/css/font-awesome.min.css'
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
} from '@storybook/addon-knobs';

import NnButton from '../components/NnButton.vue';
import { allButtons } from './buttonsMock.js';

storiesOf('Button', module)
.add('Left Icon', () => ( allButtons.leftIcon ))
.add('Right Icon', () => ( allButtons.rightIcon ))


storiesOf('Addon Knobs', module)
  .addDecorator(withKnobs)
  .add('Simple', withNotes({
      notes: `
      <h2>My story has notes AND knobs !</h2>
      <p>
        <em>Document your component here..</em>
      </p>
    `.replace(/\n/g, ''),
    })(() => {
    const name = text('Name', 'John Doe');
    const age = number('Age', 44);
    const content = `I am ${name} and I'm ${age} years old.`;
    const style = text('style', 'text-align:center; line-height: 100vh');

    return {
      template: `<h2 style="${style}">${content}</h2>`,
    };
  }))
  .add('All knobs', () => {
    const name = text('Name', 'Jane');
    const stock = number('Stock', 20, { range: true,
      min: 0,
      max: 30,
      step: 5,
    });
    const fruits = {
      apples: 'Apple',
      bananas: 'Banana',
      cherries: 'Cherry',
    };
    const fruit = select('Fruit', fruits, 'apple');
    const price = number('Price', 2.25);

    const colour = color('Border', 'deeppink');
    const today = date('Today', new Date('Jan 20 2017'));
    const items = array('Items', ['Laptop', 'Book', 'Whiskey']);
    const nice = boolean('Nice', true);

    const stockMessage = stock
      ? `I have a stock of ${stock} ${fruit}, costing &dollar;${price} each.`
      : `I'm out of ${fruit}${nice ? ', Sorry!' : '.'}`;
    const salutation = nice ? 'Nice to meet you!' : 'Leave me alone!';

    return {
      template: `
        <div style="border:2px dotted ${colour}; padding: 8px 22px; border-radius: 8px">
          <h1>My name is ${name},</h1>
          <h3>today is ${new Date(today).toLocaleDateString()}</h3>
          <p>${stockMessage}</p>
          <p>Also, I have:</p>
          <ul>
            ${items.map(item => `<li key=${item}>${item}</li>`).join('')}
          </ul>
          <p>${salutation}</p>
        </div>
      `,
    };
  });