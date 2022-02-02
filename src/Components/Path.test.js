import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Path from './Path';

test('renders content', () => {
  const path = {
    title: 'component testing',
    name: 'component test is done with react-testing-library',
    km: '1.0',
    duration: '99:00',
    differenceAltitude: 999,
    description: 'component testing with react library test',
    difficult: 'super'
  };

  const component = render(
    <Path 
      title={path.title}
      name={path.name}
      km={path.km}
      duration={path.duration}
      differenceAltitude={path.differenceAltitude}
      description={path.description}
      difficul={path.difficult}
    />
  );

  //component.debug();

  expect(component.container).toHaveTextContent(
    'component test is done with react-testing-library'
  );

});
