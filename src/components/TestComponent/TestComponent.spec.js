import React from "react";
import { shallow } from "enzyme";
import TestComponent from "./TestComponent";

const buildSubject = ({ title } = {}) => {
  const props = { title }
  return shallow(<TestComponent {...props} />);
};

describe("<TestComponent /> component", () => {
  let subject;
  beforeEach(() => {
    subject = buildSubject({ title: 'Some Test component' });
  });

  it("should render", () => {
    expect(subject.containsMatchingElement(
      <div>
        Some Test component
      </div>)).toBe(true);
  });
});
