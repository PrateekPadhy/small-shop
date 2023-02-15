import React, { render } from '@testing-library/react';

import Banner from './banner';

describe('Banner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Banner text="Hello World" />);
    expect(baseElement).toBeTruthy();
  });
});
